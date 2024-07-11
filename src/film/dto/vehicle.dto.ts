import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { FilmChrater } from 'src/entities/filmChracter.entity';
import { FilmPlanet } from 'src/entities/filmPlanet.entity';
import { FilmSpecie } from 'src/entities/filmSpecie.entity';
import { FilmStarShip } from 'src/entities/filmStarship.entity';
import { FilmVehicle } from 'src/entities/filmVehicle.entity';

export class VehicleDto {
  @ApiProperty()
  @IsNumber()
  id_vehicle: number;

  @ApiPropertyOptional()
  @IsString()
  url_vehicle: string
}