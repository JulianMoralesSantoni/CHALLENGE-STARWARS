import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { EntityManager, Repository } from 'typeorm';
import { Film } from 'src/entities/film.entity';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { FilmChrater } from 'src/entities/filmChracter.entity';
import { Chracter } from 'src/entities/Chracter.entity';
import { Planet } from 'src/entities/planet.entity';
import { FilmPlanet } from 'src/entities/filmPlanet.entity';
import { Specie } from 'src/entities/specie.entity';
import { FilmSpecie } from 'src/entities/filmSpecie.entity';
import { Starship } from 'src/entities/starship.entity';
import { FilmStarShip } from 'src/entities/filmStarship.entity';
import { Vehicle } from 'src/entities/vehicle.entity';
import { FilmVehicle } from 'src/entities/filmVehicle.entity';

@Injectable()
export class FilmService {
  constructor(
    @InjectRepository(Film)
    private filmRepository: Repository<Film>,
    private readonly httpService: HttpService,
    private configService: ConfigService,
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}
  async create(createFilmDto: CreateFilmDto) {
    const { chracters, species, vehicles, planets, starships, ...restOfDto } =
      createFilmDto;

    let FilmCreated = new Film();
    try {
      const episodeId = await this.filmRepository.findOne({
        where: {
          episode_id: createFilmDto.episode_id,
        },
      });

      if (episodeId)
        throw new BadRequestException(
          `Ya existe una pelicula correpondiente al episodio ${createFilmDto.episode_id}`,
        );

      let filmToCreate = this.filmRepository.create(restOfDto);
      filmToCreate.film_chracters = [];

      for (const people of chracters) {
        const chracterObject = new Chracter();
        chracterObject.url_chracter = people.url_chracter;
        chracterObject.id_chracter = people.id_chracter;

        const filmCharacter = new FilmChrater();
        filmCharacter.star_date = new Date();
        filmCharacter.chracters = chracterObject;

        filmToCreate.film_chracters.push(filmCharacter);
      }

      filmToCreate.film_planets = [];

      for (const plnet of planets) {
        const planetObject = new Planet();
        planetObject.url_planet = plnet.url_planet;
        planetObject.id_planet = plnet.id_planet;

        const filmPlanet = new FilmPlanet();
        filmPlanet.star_date = new Date();
        filmPlanet.planets = planetObject;

        filmToCreate.film_planets.push(filmPlanet);
      }

      filmToCreate.film_species = [];

      for (const specie of species) {
        const specieObject = new Specie();
        specieObject.url_specie = specie.url_specie;
        specieObject.id_specie = specie.id_specie;

        const filmSpecie = new FilmSpecie();
        filmSpecie.star_date = new Date();
        filmSpecie.species = specieObject;

        filmToCreate.film_species.push(filmSpecie);
      }

      filmToCreate.film_starships = [];

      for (const strship of starships) {
        const starshipObject = new Starship();
        starshipObject.url_starship = strship.url_starship;
        starshipObject.id_starship = strship.id_starship;

        const filmStarShip = new FilmStarShip();
        filmStarShip.star_date = new Date();
        filmStarShip.starships = starshipObject;

        filmToCreate.film_starships.push(filmStarShip);
      }

      filmToCreate.film_vehicles = [];

      for (const vhicle of vehicles) {
        const vehicleObject = new Vehicle();
        vehicleObject.url_vehicle = vhicle.url_vehicle;
        vehicleObject.id_vehicle = vhicle.id_vehicle;

        const filmVehicle = new FilmVehicle();
        filmVehicle.star_date = new Date();
        filmVehicle.vehicles = vehicleObject;

        filmToCreate.film_vehicles.push(filmVehicle);
      }

      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          FilmCreated = await transactionalEntityManager.save(filmToCreate);
        },
      );

      return FilmCreated;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
  }

  async findAllApiIntegration() {
    try {
      const films = (
        await lastValueFrom(
          this.httpService.get(this.configService.get('APISTARWARS')),
        )
      ).data.results;
      return films;
    } catch (error) {
      throw new InternalServerErrorException('Ocurrio un error al comunicarse con la api de Starwars')
    }
  }

  async sincronization(){
    
  }

  async findAllToDataBase() {
    try {
      const film = await this.filmRepository
        .createQueryBuilder('film')
        .select([
          'film.id_film',
          'film.title',
          'film.episode_id',
          'film.opening_crawl',
          'film.director',
          'film.producer',
          'film.release_date',
          'film.created',
          'film.edited',
          'film.url',
          'film.end_date',
        ])
        .where('film.end_date IS NULL')
        .getMany();

      return film;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
  }

  async findOne(id: number) {
    const films = (
      await lastValueFrom(
        this.httpService.get(this.configService.get('APISTARWARS') + `/${id}`),
      )
    ).data;
    return films;
  }

  async findOneToDataBase(id: number) {
    try {
      const film = await this.filmRepository
        .createQueryBuilder('film')
        .select([
          'film.id_film',
          'film.title',
          'film.episode_id',
          'film.opening_crawl',
          'film.director',
          'film.producer',
          'film.release_date',
          'film.created',
          'film.edited',
          'film.url',
          'film.end_date',
        ])
        // s information
        .addSelect([
          'filmChracter.id_film_chracter',
          'filmChracter.star_date',
          'filmChracter.end_date',
        ])
        .addSelect(['chracter.id_chracter', 'chracter.url_chracter'])
        /// planet information
        .addSelect([
          'filmPlanet.id_film_planet',
          'filmPlanet.star_date',
          'filmPlanet.end_date',
        ])
        .addSelect(['planet.id_planet', 'planet.url_planet'])
        /// staship information
        .addSelect([
          'filmStarShip.id_film_starship',
          'filmStarShip.star_date',
          'filmStarShip.end_date',
        ])
        .addSelect(['starship.id_starship', 'starship.url_starship'])
        /// starship vehicle
        .addSelect([
          'filmVehicle.id_film_vehicle',
          'filmVehicle.star_date',
          'filmVehicle.end_date',
        ])
        .addSelect(['vehicle.id_vehicle', 'vehicle.url_vehicle'])
        /// specie information
        .addSelect([
          'filmSpecie.id_film_specie',
          'filmSpecie.star_date',
          'filmSpecie.end_date',
        ])
        .addSelect(['specie.id_specie', 'specie.url_specie'])
        .leftJoin('film.film_chracters', 'filmChracter')
        .leftJoin('film.film_planets', 'filmPlanet')
        .leftJoin('film.film_starships', 'filmStarShip')
        .leftJoin('film.film_vehicles', 'filmVehicle')
        .leftJoin('film.film_species', 'filmSpecie')
        .leftJoin('filmChracter.chracters', 'chracter')
        .leftJoin('filmPlanet.planets', 'planet')
        .leftJoin('filmStarShip.starships', 'starship')
        .leftJoin('filmVehicle.vehicles', 'vehicle')
        .leftJoin('filmSpecie.species', 'specie')
        .where('film.id_film = :id', { id })
        .getOne();

      return film;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
  }



  async update(updateFilmDto: UpdateFilmDto, sincronization?: boolean) {
    try {
      const { chracters, species, vehicles, planets, starships } =
        updateFilmDto;

      let filmToBrowse = await this.findOneToDataBase(updateFilmDto.id_film);

      if (!filmToBrowse)
        throw new NotFoundException(
          `No existe una pelicula correpondiente al siguiente id: ${updateFilmDto.id_film}`,
        );

      let filmToUpdate = this.filmRepository.create(filmToBrowse);

      //Tratamiento de chracters

      const newChracter = chracters.filter(
        (chracterDTO) =>
          !filmToUpdate.film_chracters.some(
            (chracterDB) =>
              chracterDB.chracters.id_chracter === chracterDTO.id_chracter,
          ),
      );

      newChracter.forEach((element) => {
        const chracterObject = new Chracter();
        chracterObject.url_chracter = element.url_chracter;
        chracterObject.id_chracter = element.id_chracter;

        const filmCharacter = new FilmChrater();
        filmCharacter.star_date = new Date();
        filmCharacter.chracters = chracterObject;

        filmToUpdate.film_chracters.push(filmCharacter);
      });

      const obsoleteChracters = filmToUpdate.film_chracters.filter(
        (chracterDB) =>
          !chracters.some(
            (chracterDTO) =>
              chracterDTO.id_chracter === chracterDB.chracters.id_chracter,
          ),
      );
      if (obsoleteChracters) {
        filmToUpdate.film_chracters.forEach((element) => {
          if (
            obsoleteChracters.find(
              (obsoleteChracter) =>
                obsoleteChracter.chracters.id_chracter ==
                element.chracters.id_chracter,
            )
          ) {
            element.end_date = new Date();
          }
        });
      }
      console.log('Estos son los objetos');

      console.log(filmToUpdate.film_chracters);

      //Tratamiento de planet

      const newPlanets = planets.filter(
        (planetsDTO) =>
          !filmToUpdate.film_planets.some(
            (planetDB) => planetDB.planets.id_planet === planetsDTO.id_planet,
          ),
      );

      newPlanets.forEach((element) => {
        const planetObject = new Planet();
        planetObject.url_planet = element.url_planet;
        planetObject.id_planet = element.id_planet;

        const filmPlanet = new FilmPlanet();
        filmPlanet.star_date = new Date();
        filmPlanet.planets = planetObject;

        filmToUpdate.film_planets.push(filmPlanet);
      });

      const obsoletePlanets = filmToUpdate.film_planets.filter(
        (planetDB) =>
          !planets.some(
            (planetDTO) => planetDTO.id_planet === planetDB.planets.id_planet,
          ),
      );
      if (obsoletePlanets) {
        filmToUpdate.film_planets.forEach((element) => {
          if (
            obsoletePlanets.find(
              (obsoletePlanets) =>
                obsoletePlanets.planets.id_planet == element.planets.id_planet,
            )
          ) {
            element.end_date = new Date();
          }
        });
      }

      //TratamientoSpecie

      const newSpecie = species.filter(
        (specieDTO) =>
          !filmToUpdate.film_species.some(
            (specieDB) => specieDB.species.id_specie === specieDTO.id_specie,
          ),
      );

      newSpecie.forEach((element) => {
        const specieObject = new Specie();
        specieObject.url_specie = element.url_specie;
        specieObject.id_specie = element.id_specie;

        const filmSpecie = new FilmSpecie();
        filmSpecie.star_date = new Date();
        filmSpecie.species = specieObject;

        filmToUpdate.film_species.push(filmSpecie);
      });

      const obsoleteSpecies = filmToUpdate.film_species.filter(
        (specieDB) =>
          !species.some(
            (specieDTO) => specieDTO.id_specie === specieDB.species.id_specie,
          ),
      );
      if (obsoleteSpecies) {
        filmToUpdate.film_species.forEach((element) => {
          if (
            obsoleteSpecies.find(
              (obsoleteSpecie) =>
                obsoleteSpecie.species.id_specie == element.species.id_specie,
            )
          ) {
            element.end_date = new Date();
          }
        });
      }

      // Tratamiento de starships

      const newStarShip = starships.filter(
        (starshipDTO) =>
          !filmToUpdate.film_starships.some(
            (starshipDB) =>
              starshipDB.starships.id_starship === starshipDTO.id_starship,
          ),
      );

      newStarShip.forEach((element) => {
        const starshipObject = new Starship();
        starshipObject.url_starship = element.url_starship;
        starshipObject.id_starship = element.id_starship;

        const filmStarship = new FilmStarShip();
        filmStarship.star_date = new Date();
        filmStarship.starships = starshipObject;

        filmToUpdate.film_starships.push(filmStarship);
      });

      const obsoleteStarship = filmToUpdate.film_starships.filter(
        (starshipDB) =>
          !starships.some(
            (starshipDTO) =>
              starshipDTO.id_starship === starshipDB.starships.id_starship,
          ),
      );
      if (obsoleteStarship) {
        filmToUpdate.film_starships.forEach((element) => {
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

      // Tratamiento de vehiculo

      const newVehicle = vehicles.filter(
        (vehicleDTO) =>
          !filmToUpdate.film_vehicles.some(
            (vehicleDB) =>
              vehicleDB.vehicles.id_vehicle === vehicleDTO.id_vehicle,
          ),
      );

      newVehicle.forEach((element) => {
        const vehicleObject = new Vehicle();
        vehicleObject.url_vehicle = element.url_vehicle;
        vehicleObject.id_vehicle = element.id_vehicle;

        const filmStarship = new FilmVehicle();
        filmStarship.star_date = new Date();
        filmStarship.vehicles = vehicleObject;

        filmToUpdate.film_vehicles.push(filmStarship);
      });

      const obsoleteVehicle = filmToUpdate.film_vehicles.filter(
        (vehicleDB) =>
          !vehicles.some(
            (vehicleDTO) =>
              vehicleDTO.id_vehicle === vehicleDB.vehicles.id_vehicle,
          ),
      );
      if (obsoleteVehicle) {
        filmToUpdate.film_vehicles.forEach((element) => {
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

      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(filmToUpdate);
        },
      );

      return filmToUpdate;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          error: error.message,
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error.message,
        },
      );
    }
  }

  async remove(id_film: number) {
    try {
      const filmToDelete = await this.filmRepository.findOne({
        where: {
          id_film: id_film,
        },
      });
      if (!filmToDelete)
        throw new NotFoundException(`No existe la pelicula con ${id_film}`);
      if (filmToDelete.end_date)
        throw new BadRequestException(
          'La pelicula ya se ecunetra dada de baja',
        );

      filmToDelete.end_date = new Date();
      await this.entityManager.transaction(
        async (transactionalEntityManager) => {
          await transactionalEntityManager.save(filmToDelete);
        },
      );

      return `Se borro la pelicula ${filmToDelete.title}`;
    } catch (error) {}
  }
}
