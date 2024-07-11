import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { ChracterDto } from './chracter.dto';
import { PlanetDto } from './planet.dto';
import { StarShipDto } from './starship.dto';
import { VehicleDto } from './vehicle.dto';
import { SpecieDto } from './specie.dto';

export class CreateFilmDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNumber()
  episode_id: number;

  @ApiProperty()
  @IsString()
  opening_crawl: string;

  @ApiProperty()
  @IsString()
  director: string;

  @ApiProperty()
  @IsString()
  producer: string;

  @ApiProperty()
  @IsString()
  release_date: string;

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => ChracterDto)
  chracter: ChracterDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => PlanetDto)
  planet: PlanetDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => StarShipDto)
  starship: StarShipDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => VehicleDto)
  vehicle: VehicleDto[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => SpecieDto)
  specie: SpecieDto[];

  @ApiProperty()
  @IsString()
  url: string;
}
