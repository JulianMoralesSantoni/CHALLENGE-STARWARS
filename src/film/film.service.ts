import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { DeepPartial, EntityManager, Repository } from 'typeorm';
import { Article } from '../entities/article.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { ArticleChrater } from '../entities/articleChracter.entity';
import { Chracter } from '../entities/chracter.entity';
import { Planet } from '../entities/planet.entity';
import { ArticlePlanet } from '../entities/articlePlanet.entity';
import { Specie } from '../entities/specie.entity';
import { ArticleSpecie } from '../entities/articleSpecie.entity';
import { Starship } from '../entities/starship.entity';
import { ArticleStarShip } from '../entities/articleStarship.entity';
import { Vehicle } from '../entities/vehicle.entity';
import { ArticleVehicle } from '../entities/articleVehicle.entity';
import { ErrorDto } from '../utils/errorDto';
import { ApiResponseData } from './interface/apiResponseDataFilms.interface';
import { plainToClass } from '@nestjs/class-transformer';
import { IFilm } from './interface/films.interface';
import { ReportDto } from './dto/report.dto';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Article)
    private filmRepository: Repository<Article>,
    private readonly httpService: HttpService,
    private configService: ConfigService,
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}

  async create(createFilmDto: CreateFilmDto, sincronizated?: boolean) {
    const report: ReportDto = new ReportDto();
    const { chracters, species, vehicles, planets, starships, ...restOfDto } =
      createFilmDto;

    let FilmCreated = new Article();
    try {
      if (!createFilmDto.season) {
        const episodeId = await this.filmRepository.findOne({
          where: {
            episode_id: createFilmDto.episode_id,
          },
        });

        if (episodeId) {
          throw new BadRequestException(
            `Ya existe una pelicula con episode ${episodeId.episode_id}`,
          );
        }
      }
      const filmToCreate = this.filmRepository.create(restOfDto);
      filmToCreate.article_chracters = [];

      chracters?.forEach((people) => {
        const chracterObject = plainToClass(Chracter, people);
        chracterObject.url_sincronizated = sincronizated
          ? sincronizated
          : false;

        const filmCharacter = new ArticleChrater();
        filmCharacter.star_date = new Date();
        filmCharacter.chracters = chracterObject;

        filmToCreate.article_chracters.push(filmCharacter);
      });

      filmToCreate.article_planets = [];

      planets?.forEach((planet) => {
        const planetObject = plainToClass(Planet, planet);
        planetObject.url_sincronizated = sincronizated ? sincronizated : false;

        const filmPlanet = new ArticlePlanet();
        filmPlanet.star_date = new Date();
        filmPlanet.planets = planetObject;
        filmToCreate.article_planets.push(filmPlanet);
      });

      filmToCreate.article_species = [];

      species?.forEach((specie) => {
        const specieObject = plainToClass(Specie, specie);
        specieObject.url_sincronizated = sincronizated ? sincronizated : false;

        const filmSpecie = new ArticleSpecie();
        filmSpecie.star_date = new Date();
        filmSpecie.species = specieObject;

        filmToCreate.article_species.push(filmSpecie);
      });

      filmToCreate.article_starships = [];

      starships?.forEach((starship) => {
        const starshipObject = plainToClass(Starship, starship);
        starshipObject.url_sincronizated = sincronizated
          ? sincronizated
          : false;

        const filmStarShip = new ArticleStarShip();
        filmStarShip.star_date = new Date();
        filmStarShip.starships = starshipObject;

        filmToCreate.article_starships.push(filmStarShip);
      });

      filmToCreate.article_vehicles = [];

      vehicles.forEach((vehicle) => {
        const vehicleObject = plainToClass(Vehicle, vehicle);
        vehicleObject.url_sincronizated = sincronizated ? sincronizated : false;

        const filmVehicle = new ArticleVehicle();
        filmVehicle.star_date = new Date();
        filmVehicle.vehicles = vehicleObject;

        filmToCreate.article_vehicles.push(filmVehicle);
      });

      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          FilmCreated = await transactionalEntityManager.save(filmToCreate);
        },
      );

      if (sincronizated == true) {
        report.created.push({ title: FilmCreated.title, status: 'created' });
      }

      return FilmCreated;
    } catch (error) {
      if (sincronizated == true) {
        report.errors.push({
          title: createFilmDto.title,
          status: 'error',
          message: error.message,
        });
      }
      throw new InternalServerErrorException(error.message);
    }
  }

  async findAllApiIntegration() {
    try {
      const films = (
        await lastValueFrom(
          this.httpService.get<ApiResponseData>(
            this.configService.get('APISTARWARS_FILMS'),
          ),
        )
      ).data;

      return films.results;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error al comunicarse con la api de STAR WARS',
      );
    }
  }

  async filmSincronization() {
    let page = 1;
    let allData: IFilm[] = [];
    let hasMoreData = true;
    const report: ReportDto = new ReportDto();
    try {
      while (hasMoreData) {
        const films = (
          await lastValueFrom(
            this.httpService.get<ApiResponseData>(
              `${this.configService.get('APISTARWARS_FILMS')}?page=${page}`,
            ),
          )
        ).data;

        allData = [...allData, ...films.results];
        hasMoreData = !!films.next;

        page++;
      }

      const filmsInDataBase = await this.filmRepository.find();

      const filmsToCreate: IFilm[] = [];
      const filmsToUpdate: IFilm[] = [];

      for (const iterator of allData) {
        const article = filmsInDataBase.find(
          (movie) => movie.episode_id === iterator.episode_id,
        );

        if (article) {
          iterator.id_article = article.id_article;
          filmsToUpdate.push(iterator);
        } else {
          filmsToCreate.push(iterator);
        }
      }

      for (const iterator of filmsToCreate) {
        const { characters, planets, starships, species, vehicles } = iterator;
        try {
          const article = plainToClass(CreateFilmDto, iterator);
          article.chracters = await this.iteratorChracters(characters);
          article.planets = await this.iteratorPlanets(planets);
          article.starships = await this.iteratorStarships(starships);
          article.species = await this.iteratorSpecie(species);
          article.vehicles = await this.iteratorVehicle(vehicles);

          await this.create(article, true);
        } catch (error) {
          report.errors.push({
            id: iterator.episode_id,
            message: error.message,
          });
        }
      }

      for (const iterator of filmsToUpdate) {
        const { characters, planets, starships, species, vehicles } = iterator;
        try {
          const article = plainToClass(UpdateFilmDto, iterator);
          article.chracters = await this.iteratorChracters(characters);
          article.planets = await this.iteratorPlanets(planets);
          article.starships = await this.iteratorStarships(starships);
          article.species = await this.iteratorSpecie(species);
          article.vehicles = await this.iteratorVehicle(vehicles);

          await this.update(article, true);
        } catch (error) {
          report.errors.push({
            id: iterator.episode_id,
            message: error.message,
          });
        }
      }

      return report;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error en la sincronización',
      );
    }
  }

  async iteratorChracters(array: string[]) {
    const chracters: Chracter[] = [];
    for (const iterator of array) {
      const chracter = new Chracter();
      chracter.url_chracter = iterator;
      chracters.push(chracter);
    }
    return chracters;
  }

  async iteratorVehicle(array: string[]) {
    const vehicles: Vehicle[] = [];
    for (const iterator of array) {
      const vehicle = new Vehicle();
      vehicle.url_vehicle = iterator;
      vehicles.push(vehicle);
    }
    return vehicles;
  }

  async iteratorSpecie(array: string[]) {
    const species: Specie[] = [];
    for (const iterator of array) {
      const specie = new Specie();
      specie.url_specie = iterator;
      species.push(specie);
    }
    return species;
  }

  async iteratorStarships(array: string[]) {
    const starships: Starship[] = [];
    for (const iterator of array) {
      const starship = new Starship();
      starship.url_starship = iterator;
      starships.push(starship);
    }
    return starships;
  }

  async iteratorPlanets(array: string[]) {
    const planets: Planet[] = [];
    for (const iterator of array) {
      const planet = new Planet();
      planet.url_planet = iterator;
      planets.push(planet);
    }
    return planets;
  }

  async getChracterAPI(url: string) {
    return await lastValueFrom(this.httpService.get(url));
  }

  async findAllToDataBase() {
    try {
      const film = await this.filmRepository
        .createQueryBuilder('article')
        .select([
          'article.id_article',
          'article.title',
          'article.episode_id',
          'article.opening_crawl',
          'article.director',
          'article.producer',
          'article.release_date',
          'article.created',
          'article.edited',
          'article.url',
          'article.end_date',
        ])
        .addSelect([
          'season.id_season',
          'season.season_number',
          'season.title',
          'season.description',
          'season.release_date',
          'season.end_date',
          'season.number_of_episodes',
          'season.poster_url',
          'season.created',
          'season.updated',
        ])
        .addSelect([
          'chapter.id_chapter',
          'chapter.title',
          'chapter.description',
          'chapter.episode_number',
          'chapter.release_date',
          'chapter.duration',
          'chapter.streaming_url',
          'chapter.rating',
          'chapter.created',
          'chapter.updated',
        ])
        .addSelect(['genre.id_genre', 'genre.genre_name'])
        .leftJoin('article.seasons', 'season')
        .leftJoin('season.chapters', 'chapter')
        .leftJoin('article.genre', 'genre')
        .where('article.end_date IS NULL')
        .getMany();

      return film;
    } catch (error) {
      return new InternalServerErrorException(
        'Ocurrio un error, no se puede consultar la lista de articulos',
      );
    }
  }

  async findOne(id: number) {
    try {
      const films = (
        await lastValueFrom(
          this.httpService.get(
            this.configService.get('APISTARWARS') + `/${id}`,
          ),
        )
      ).data;
      return films;
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error, no se pudo conectar con la apiStarWars',
      );
    }
  }

  async findOneToDataBase(id: number, update?: boolean) {
    const articleExist = await this.filmRepository.findOne({
      where: {
        id_article: id,
      },
    });

    if (!articleExist) {
      throw new BadRequestException(`No existe el articulo con Id = ${id}`);
    }

    try {
      const article = await this.filmRepository
        .createQueryBuilder('article')
        .select([
          'article.id_article',
          'article.title',
          'article.episode_id',
          'article.opening_crawl',
          'article.director',
          'article.producer',
          'article.release_date',
          'article.created',
          'article.edited',
          'article.url',
          'article.end_date',
        ])
        .addSelect([
          'season.id_season',
          'season.season_number',
          'season.title',
          'season.description',
          'season.release_date',
          'season.end_date',
          'season.number_of_episodes',
          'season.poster_url',
          'season.created',
          'season.updated',
        ])
        .addSelect([
          'chapter.id_chapter',
          'chapter.title',
          'chapter.description',
          'chapter.episode_number',
          'chapter.release_date',
          'chapter.duration',
          'chapter.streaming_url',
          'chapter.rating',
          'chapter.created',
          'chapter.updated',
        ])
        // s information
        .addSelect([
          'articleChracter.id_article_chracter',
          'articleChracter.star_date',
          'articleChracter.end_date',
        ])
        .addSelect([
          'chracter.id_chracter',
          'chracter.url_chracter',
          'chracter.url_sincronizated',
          'chracter.description_chracter',
          'chracter.name_actor',
          'chracter.name_chracter',
          'chracter.star_date',
          'chracter.edited',
          'chracter.end_date',
        ])
        /// planet information
        .addSelect([
          'articlePlanet.id_article_planet',
          'articlePlanet.star_date',
          'articlePlanet.end_date',
        ])
        .addSelect([
          'planet.id_planet',
          'planet.url_planet',
          'planet.url_sincronizated',
          'planet.climate_planet',
          'planet.name_planet',
          'planet.gravity_planet',
          'planet.star_date',
          'planet.edited',
          'planet.end_date',
        ])
        /// staship information
        .addSelect([
          'articleStarShip.id_article_starship',
          'articleStarShip.star_date',
          'articleStarShip.end_date',
        ])
        .addSelect([
          'starship.id_starship',
          'starship.url_starship',
          'starship.name_starship',
          'starship.modelo_starship',
          'starship.class_starship',
          'starship.star_date',
          'starship.edited',
          'starship.end_date',
          'starship.url_sincronizated',
        ])
        /// starship vehicle
        .addSelect([
          'articleVehicle.id_article_vehicle',
          'articleVehicle.star_date',
          'articleVehicle.end_date',
        ])
        .addSelect([
          'vehicle.id_vehicle',
          'vehicle.url_vehicle',
          'vehicle.name_vehicle',
          'vehicle.modelo_vehicle',
          'vehicle.class_vehicle',
          'vehicle.star_date',
          'vehicle.edited',
          'vehicle.end_date',
          'vehicle.url_sincronizated',
        ])
        /// specie information
        .addSelect([
          'articleSpecie.id_article_specie',
          'articleSpecie.star_date',
          'articleSpecie.end_date',
        ])
        .addSelect([
          'specie.id_specie',
          'specie.language',
          'specie.name',
          'specie.description',
          'specie.star_date',
          'specie.edited',
          'specie.end_date',
          'specie.url_sincronizated',
        ])
        .leftJoin('article.seasons', 'season')
        .leftJoin('season.chapters', 'chapter')
        .leftJoinAndSelect('article.article_chracters', 'articleChracter')
        .leftJoinAndSelect('article.article_planets', 'articlePlanet')
        .leftJoinAndSelect('article.article_starships', 'articleStarShip')
        .leftJoinAndSelect('article.article_vehicles', 'articleVehicle')
        .leftJoinAndSelect('article.article_species', 'articleSpecie')
        .leftJoinAndSelect('articleChracter.chracters', 'chracter')
        .leftJoin('articlePlanet.planets', 'planet')
        .leftJoin('articleStarShip.starships', 'starship')
        .leftJoin('articleVehicle.vehicles', 'vehicle')
        .leftJoin('articleSpecie.species', 'specie')
        .where('article.id_article = :id', { id });
      if (!update) {
        article
          .andWhere('articleVehicle.end_date is NULL')
          .andWhere('articleSpecie.end_date is NULL')
          .andWhere('articleStarShip.end_date is NULL')
          .andWhere('articlePlanet.end_date is NULL')
          .andWhere('articleChracter.end_date is NULL');

        return article.getOne();
      }

      return await article.getOne();
    } catch (error) {
      throw new InternalServerErrorException(
        'Ocurrio un error, no se pudo devolver la información del articulo',
      );
    }
  }

  async update(updateFilmDto: UpdateFilmDto, sincronizated?: boolean) {
    const report: ReportDto = new ReportDto();

    try {
      const {
        chracters,
        species,
        vehicles,
        planets,
        starships,
        genre,
        ...restOfDto
      } = updateFilmDto;

      const articleToBrowse = await this.findOneToDataBase(
        updateFilmDto.id_article,
        true,
      );

      if (!articleToBrowse)
        throw new BadRequestException(
          `No existe una pelicula correpondiente al siguiente id: ${updateFilmDto.id_article}`,
        );

      const articleToUpdate = this.filmRepository.create(articleToBrowse);

      articleToUpdate.articleType = restOfDto.articleType;
      articleToUpdate.director = restOfDto.director;
      articleToUpdate.episode_id = restOfDto.episode_id;
      articleToUpdate.opening_crawl = restOfDto.opening_crawl;
      articleToUpdate.producer = restOfDto.producer;
      articleToUpdate.release_date = restOfDto.release_date;
      articleToUpdate.seasons = restOfDto.season;
      articleToUpdate.title = restOfDto.title;
      articleToUpdate.url = restOfDto.url;
      articleToUpdate.edited = new Date()

      //Tratamiento de chracters

      if (chracters?.length > 0) {
        const newChracter = chracters.filter(
          (chracterDTO) =>
            !articleToUpdate.article_chracters?.some(
              (chracterDB) =>
                chracterDB.chracters?.id_chracter === chracterDTO.id_chracter,
            ),
        );

        newChracter.forEach((element) => {
          const chracterObject = plainToClass(Chracter, element);
          chracterObject.url_sincronizated = sincronizated
            ? sincronizated
            : false;

          const filmCharacter = new ArticleChrater();
          filmCharacter.star_date = new Date();
          filmCharacter.chracters = chracterObject;

          if (!articleToUpdate.article_chracters) {
            articleToUpdate.article_chracters = [];
          }

          articleToUpdate.article_chracters.push(filmCharacter);
        });

        const obsoleteChracters = articleToUpdate.article_chracters.filter(
          (chracterDB) =>
            !chracters?.some(
              (chracterDTO) =>
                chracterDTO.id_chracter === chracterDB.chracters?.id_chracter,
            ),
        );

        if (obsoleteChracters.length > 0) {
          articleToUpdate.article_chracters.forEach((element) => {
            if (
              obsoleteChracters.find(
                (obsoleteChracter) =>
                  obsoleteChracter.chracters?.id_chracter ==
                  element.chracters?.id_chracter,
              )
            ) {
              element.end_date = new Date();
            }
          });
        }
      }

      //Tratamiento de planet

      if (planets?.length > 0) {
        const newPlanets = planets.filter(
          (planetsDTO) =>
            !articleToUpdate.article_planets?.some(
              (planetDB) => planetDB.planets.id_planet === planetsDTO.id_planet,
            ),
        );

        newPlanets?.forEach((element) => {
          const planetObject = plainToClass(Planet, element);
          planetObject.url_sincronizated = sincronizated
            ? sincronizated
            : false;

          const filmPlanet = new ArticlePlanet();
          filmPlanet.star_date = new Date();
          filmPlanet.planets = planetObject;

          articleToUpdate.article_planets.push(filmPlanet);
        });

        const obsoletePlanets = articleToUpdate.article_planets.filter(
          (planetDB) =>
            !planets?.some(
              (planetDTO) => planetDTO.id_planet === planetDB.planets.id_planet,
            ),
        );
        if (obsoletePlanets) {
          articleToUpdate.article_planets.forEach((element) => {
            if (
              obsoletePlanets.find(
                (obsoletePlanets) =>
                  obsoletePlanets.planets.id_planet ==
                  element.planets.id_planet,
              )
            ) {
              element.end_date = new Date();
            }
          });
        }
      }
      //TratamientoSpecie

      if (species?.length > 0) {
        const newSpecie = species.filter(
          (specieDTO) =>
            !articleToUpdate.article_species?.some(
              (specieDB) => specieDB.species.id_specie === specieDTO.id_specie,
            ),
        );

        newSpecie?.forEach((element) => {
          const specieObject = plainToClass(Specie, element);
          specieObject.url_sincronizated = sincronizated
            ? sincronizated
            : false;

          const filmSpecie = new ArticleSpecie();
          filmSpecie.star_date = new Date();
          filmSpecie.species = specieObject;

          articleToUpdate.article_species.push(filmSpecie);
        });

        const obsoleteSpecies = articleToUpdate.article_species.filter(
          (specieDB) =>
            !species?.some(
              (specieDTO) => specieDTO.id_specie === specieDB.species.id_specie,
            ),
        );
        if (obsoleteSpecies) {
          articleToUpdate.article_species.forEach((element) => {
            if (
              obsoleteSpecies?.find(
                (obsoleteSpecie) =>
                  obsoleteSpecie.species.id_specie == element.species.id_specie,
              )
            ) {
              element.end_date = new Date();
            }
          });
        }
      }
      // Tratamiento de starships

      if (starships?.length > 0) {
        const newStarShip = starships.filter(
          (starshipDTO) =>
            !articleToUpdate.article_starships?.some(
              (starshipDB) =>
                starshipDB.starships.id_starship === starshipDTO.id_starship,
            ),
        );

        newStarShip?.forEach((element) => {
          const starshipObject = plainToClass(Starship, element);
          starshipObject.url_sincronizated = sincronizated
            ? sincronizated
            : false;

          const filmStarship = new ArticleStarShip();
          filmStarship.star_date = new Date();
          filmStarship.starships = starshipObject;

          articleToUpdate.article_starships.push(filmStarship);
        });

        const obsoleteStarship = articleToUpdate.article_starships.filter(
          (starshipDB) =>
            !starships?.some(
              (starshipDTO) =>
                starshipDTO.id_starship === starshipDB.starships.id_starship,
            ),
        );
        if (obsoleteStarship) {
          articleToUpdate.article_starships.forEach((element) => {
            if (
              obsoleteStarship.find(
                (obsoleteStarship) =>
                  obsoleteStarship.starships.id_starship ==
                  element.starships.id_starship,
              )
            ) {
              element.end_date = new Date();
            }
          });
        }
      }
      // Tratamiento de vehiculo
      if (vehicles?.length > 0) {
        const newVehicle = vehicles.filter(
          (vehicleDTO) =>
            !articleToUpdate.article_vehicles?.some(
              (vehicleDB) =>
                vehicleDB.vehicles.id_vehicle === vehicleDTO.id_vehicle,
            ),
        );

        newVehicle?.forEach((element) => {
          const vehicleObject = plainToClass(Vehicle, element);
          vehicleObject.url_sincronizated = sincronizated
            ? sincronizated
            : false;

          const filmStarship = new ArticleVehicle();
          filmStarship.star_date = new Date();
          filmStarship.vehicles = vehicleObject;

          articleToUpdate.article_vehicles.push(filmStarship);
        });

        const obsoleteVehicle = articleToUpdate.article_vehicles.filter(
          (vehicleDB) =>
            !vehicles?.some(
              (vehicleDTO) =>
                vehicleDTO.id_vehicle === vehicleDB.vehicles.id_vehicle,
            ),
        );
        if (obsoleteVehicle) {
          articleToUpdate.article_vehicles.forEach((element) => {
            if (
              obsoleteVehicle.find(
                (obsoleteVehicle) =>
                  obsoleteVehicle.vehicles.id_vehicle ==
                  element.vehicles.id_vehicle,
              )
            ) {
              element.end_date = new Date();
            }
          });
        }
      }


      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(articleToUpdate);
        },
      );

      if (sincronizated == true) {
        report.created.push({
          id: articleToUpdate.id_article,
          title: articleToUpdate.title,
          status: 'created',
        });
      }

      if (!sincronizated) return articleToUpdate;
    } catch (error) {
      if (sincronizated == true) {
        report.errors.push({
          id: updateFilmDto.id_article,
          status: 'error',
          message: error.message,
        });
      }
      console.log(error.message);
      
      throw new InternalServerErrorException(
        'No se pudo actualizar el articulo',
      );
    }
  }

  async remove(id_article: number) {
    try {
      const filmToDelete = await this.filmRepository.findOne({
        where: {
          id_article: id_article,
        },
        relations: {
          articleType: true,
        },
      });
      if (!filmToDelete)
        throw new BadRequestException(
          `No existe el articulo con id = ${id_article}`,
        );
      if (filmToDelete.end_date)
        throw new BadRequestException(
          `El articulo ya se encuentra dado de baja`,
        );

      filmToDelete.end_date = new Date();
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(filmToDelete);
        },
      );

      return `Se borro ${filmToDelete.title}`;
    } catch (error) {
      return new InternalServerErrorException(
        'Ocurrio un error, no pudo borrar el articulo',
      );
    }
  }
}
