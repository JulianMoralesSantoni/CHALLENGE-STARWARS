import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { Chracter } from '../../entities/chracter.entity';
import { Starship } from '../../entities/starship.entity';
import { Vehicle } from '../../entities/vehicle.entity';
import { Specie } from '../../entities/specie.entity';
import { Planet } from '../../entities/planet.entity';
import { ArticleType } from 'src/entities/articleType.entity';
import { Season } from 'src/entities/season.entity';
import { Genre } from 'src/entities/genre.entity';
import { IsString, IsNumber, IsOptional, ValidateNested, ArrayMinSize } from 'class-validator';

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
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Chracter)
  @ArrayMinSize(1)
  chracters: Chracter[];

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Planet)
  @ArrayMinSize(1)
  planets: Planet[];

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Starship)
  @ArrayMinSize(1)
  starships: Starship[];

  @ApiProperty()
  @ValidateNested({ each: true })
  @Type(() => Vehicle)
  @ArrayMinSize(1)
  vehicles: Vehicle[];

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Specie)
  @ArrayMinSize(1)
  species: Specie[];

  @ApiProperty()
  @IsString()
  url: string;

  @ApiProperty()
  @ValidateNested()
  @Type(() => ArticleType)
  articleType: ArticleType;

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => Season)
  season: Season[];

  @ApiProperty()
  @IsOptional()
  @ValidateNested()
  @ArrayMinSize(1)
  @Type(() => Genre)
  genre: Genre[];
}
