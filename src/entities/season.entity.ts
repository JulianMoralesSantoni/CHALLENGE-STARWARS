import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Chapter } from './chapter.entity';
import { Article } from './article.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Entity('season')
export class Season {
  
  @PrimaryGeneratedColumn({ name: 'id_season', type: 'int' })
  id_season: number;

  @ApiProperty()
  @IsNumber()
  @Column({ name: 'season_number', type: 'int' })
  season_number: number;

  @ApiProperty()
  @IsString()
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({ type: 'varchar', nullable: true,  length:1000 })
  description: string;

  @ApiProperty()
  @IsOptional()
  @Column({ type: 'datetime', nullable: true })
  release_date: Date;

  @Column({ type: 'datetime', nullable: true })
  end_date: Date;

  @ManyToOne(() => Article, (article) => article.seasons)
  @JoinColumn({ name: 'id_article' })
  article: Article;

  @OneToMany(() => Chapter, (chapter) => chapter.season, { cascade: true })
  chapters: Chapter[];

  @ApiProperty()
  @IsNumber()
  @Column({ type: 'int', name: 'number_of_episodes', nullable: true })
  number_of_episodes: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({ nullable: true })
  poster_url: string;

  @Column({ name: 'created', type: 'datetime' })
  created: Date;

  @Column({ name: 'updated', type: 'datetime' })
  updated: Date;
}
