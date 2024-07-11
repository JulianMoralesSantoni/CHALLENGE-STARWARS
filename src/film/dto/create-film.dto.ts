import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ArrayMinSize, arrayMinSize, IsNumber, IsString, ValidateNested } from 'class-validator';
import { Chracter } from 'src/entities/Chracter.entity';
import { Starship } from 'src/entities/starship.entity';
import { Vehicle } from 'src/entities/vehicle.entity';
import { Specie } from 'src/entities/specie.entity';
import { Planet } from 'src/entities/planet.entity';

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
  @Type(() => Chracter)
  @ArrayMinSize(1)
  chracters: Chracter[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => Planet)
  @ArrayMinSize(1)
  planets: Planet[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => Starship)
  @ArrayMinSize(1)
  starships: Starship[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => Vehicle)
  @ArrayMinSize(1)
  vehicles: Vehicle[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => Specie)
  @ArrayMinSize(1)
  species: Specie[];

  @ApiProperty()
  @IsString()
  url: string;
}
