import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import { Film } from 'src/entities/film.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FilmChrater } from 'src/entities/filmChracter.entity';
import { Chracter } from 'src/entities/Chracter.entity';
import { Planet } from 'src/entities/planets.entity';
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
  ) {}
  async create(createFilmDto: CreateFilmDto) {
    const { chracter, specie, vehicle, planet, starship, ...restOfDto } =
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
      filmToCreate.film_chracter = [];

      for (const people of chracter) {
        const chracterObject = new Chracter();
        chracterObject.url_character = people.url_chracter;
        chracterObject.id_character = people.id_chracter;

        const filmCharacter = new FilmChrater();
        filmCharacter.star_date = new Date();
        filmCharacter.chracter = chracterObject;

        filmToCreate.film_chracter.push(filmCharacter);
      }

      filmToCreate.film_planet = [];

      for (const plnet of planet) {
        const planetObject = new Planet();
        planetObject.url_planet = plnet.url_planet;
        planetObject.id_planet = plnet.id_planet;

        const filmPlanet = new FilmPlanet();
        filmPlanet.star_date = new Date();
        filmPlanet.planet = planetObject;

        filmToCreate.film_planet.push(filmPlanet);
      }

      filmToCreate.film_specie = [];

      for (const spcie of specie) {
        const specieObject = new Specie();
        specieObject.url_specie = spcie.url_specie;
        specieObject.id_specie = spcie.id_specie;

        const filmSpecie = new FilmSpecie();
        filmSpecie.star_date = new Date();
        filmSpecie.specie = specieObject;

        filmToCreate.film_specie.push(filmSpecie);
      }

      filmToCreate.film_starship = [];

      for (const strship of starship) {
        const starshipObject = new Starship();
        starshipObject.url_starship = strship.url_starship;
        starshipObject.id_starship = strship.id_starship;

        const filmStarShip = new FilmStarShip();
        filmStarShip.star_date = new Date();
        filmStarShip.starship = starshipObject;

        filmToCreate.film_starship.push(filmStarShip);
      }

      filmToCreate.film_vehicle = [];

      for (const vhicle of vehicle) {
        const vehicleObject = new Vehicle();
        vehicleObject.url_vehicle = vhicle.url_vehicle;
        vehicleObject.id_vehicle = vhicle.id_vehicle;

        const filmVehicle = new FilmVehicle();
        filmVehicle.star_date = new Date();
        filmVehicle.vehicle = vehicleObject;

        filmToCreate.film_vehicle.push(filmVehicle);
      }
      console.log('Estes el filmEstarchip');

      console.log(filmToCreate);

      FilmCreated = await this.filmRepository.save(filmToCreate);

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

  async findAll() {
    const films = (
      await lastValueFrom(
        this.httpService.get(this.configService.get('APISTARWARS')),
      )
    ).data.results;
    return films;
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
        // chracter information
        .addSelect([
          'filmChracter.id_film_chracter',
          'filmChracter.star_date',
          'filmChracter.end_date',
        ])
        .addSelect(['chracter.id_character', 'chracter.url_character'])
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
        .leftJoin('film.film_chracter', 'filmChracter')
        .leftJoin('film.film_planet', 'filmPlanet')
        .leftJoin('film.film_starship', 'filmStarShip')
        .leftJoin('film.film_vehicle', 'filmVehicle')
        .leftJoin('film.film_specie', 'filmSpecie')
        .leftJoin('filmChracter.chracter', 'chracter')
        .leftJoin('filmPlanet.planet', 'planet')
        .leftJoin('filmStarShip.starship', 'starship')
        .leftJoin('filmVehicle.vehicle', 'vehicle')
        .leftJoin('filmSpecie.specie', 'specie')
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

  async update(id: number, updateFilmDto: UpdateFilmDto) {
    const { chracter, specie, vehicle, planet, starship, ...restOfDto } =
      updateFilmDto;

    try {
      let film = await this.findOneToDataBase(id);

      if (!film)
        throw new NotFoundException(
          `Ya existe una pelicula correpondiente al episodio ${updateFilmDto.episode_id}`,
        );

      let filmToUpdate = this.filmRepository.create(restOfDto);

      // for (const chracter of film_chracter) {
      //   const chracterObject = new Chracter();
      //   chracterObject.url_character = chracter.url_chracter;
      //   chracterObject.id_character = chracter.id_chracter;

      //   const filmCharacter = new FilmChrater();
      //   filmCharacter.star_date = new Date();
      //   filmCharacter.chracter = chracterObject;

      //   filmToUpdate.film_chracter.push(filmCharacter);
      // }

      // for (const planet of film_planet) {
      //   const planetObject = new Planet();
      //   planetObject.url_planet = planet.url_planet;
      //   planetObject.id_planet = planet.id_planet;

      //   const filmPlanet = new FilmPlanet();
      //   filmPlanet.star_date = new Date();
      //   filmPlanet.planet = planetObject;

      //   filmToCreate.film_planet.push(filmPlanet);
      // }

      // for (const specie of film_specie) {
      //   const specieObject = new Specie();
      //   specieObject.url_specie = specie.url_specie;
      //   specieObject.id_specie = specie.id_specie;

      //   const filmSpecie = new FilmSpecie();
      //   filmSpecie.star_date = new Date();
      //   filmSpecie.specie = specieObject;

      //   filmToCreate.film_specie.push(filmSpecie);
      // }

      // for (const starship of film_starship) {
      //   const starshipObject = new Starship();
      //   starshipObject.url_starship = starship.url_starship;
      //   starshipObject.id_starship = starship.id_starship;

      //   const filmStarShip = new FilmStarShip();
      //   filmStarShip.star_date = new Date();
      //   filmStarShip.starship = starshipObject;

      //   filmToCreate.film_starship.push(filmStarShip);
      // }

      // for (const vehicle of film_vehicle) {
      //   const vehicleObject = new Vehicle();
      //   vehicleObject.url_vehicle = vehicle.url_vehicle;
      //   vehicleObject.id_vehicle = vehicle.id_vehicle;

      //   const filmVehicle = new FilmVehicle();
      //   filmVehicle.star_date = new Date();
      //   filmVehicle.vehicle = vehicleObject;

      //   filmToCreate.film_vehicle.push(filmVehicle);
      // }
      // FilmCreated = await this.filmRepository.save(filmToCreate);

      // return FilmCreated;
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

  remove(id: number) {
    return `This action removes a #${id} film`;
  }
}
