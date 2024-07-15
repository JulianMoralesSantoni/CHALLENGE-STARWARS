import { Planet } from 'src/entities/planet.entity';
import { PlanetDto } from './planets.dto';
import { Starship } from 'src/entities/starship.entity';
import { StarshipDto } from './starships.dto';
import { Vehicle } from 'src/entities/vehicle.entity';
import { VehicleDto } from './vehicles.dto';
import { Specie } from 'src/entities/specie.entity';
import { SpecieDto } from './species.dto';
import { Chracter } from 'src/entities/chracter.entity';
import { ChracterDto } from './chracter.dto';

export class FilmResponseDto {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Chracter[] | ChracterDto[];
  planets: Planet[] | PlanetDto[];
  starships: Starship[] | StarshipDto[];
  vehicles: Vehicle[] | VehicleDto[];
  species: Specie[] | SpecieDto[];
  created: string;
  edited: string;
  url: string;
}
