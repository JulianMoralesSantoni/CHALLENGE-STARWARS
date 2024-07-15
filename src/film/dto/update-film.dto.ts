import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMinSize,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ArticleType } from 'src/entities/articleType.entity';
import { Chracter } from 'src/entities/chracter.entity';
import { Planet } from 'src/entities/planet.entity';
import { Specie } from 'src/entities/specie.entity';
import { Starship } from 'src/entities/starship.entity';
import { Vehicle } from 'src/entities/vehicle.entity';
import { Season } from 'src/entities/season.entity';
import { Genre } from 'src/entities/genre.entity';

export class UpdateFilmDto {
  @ApiProperty()
  @IsNumber()
  id_article: number;

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
  @IsOptional()
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

  @ApiPropertyOptional()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => Genre)
  @ArrayMinSize(1)
  genre: Genre[];

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
}
