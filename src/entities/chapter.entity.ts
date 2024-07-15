import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Season } from './season.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

@Entity('chapter')
export class Chapter {
  @PrimaryGeneratedColumn({ name: 'id_chapter', type: 'int' })
  id_chapter: number;

  @ApiProperty()
  @IsString()
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({ name: 'description', type: 'varchar', length: 1000, nullable: true })
  description: string;


  @Column({ name: 'episode_number', type: 'int' })
  episode_number: number;

  @Column({ type: 'datetime', nullable: true })
  release_date: Date;

  @Column({ type: 'int', nullable: true })
  duration: number;

  @ManyToOne(() => Season, (season) => season.chapters)
  @JoinColumn({ name: 'id_season' })
  season: Season;

  @ApiProperty()
  @IsString()
  @Column({ name: 'streaming_url', type: 'varchar', nullable: true })
  streaming_url: string;

  @Column({ type: 'decimal', precision: 3, scale: 1, nullable: true })
  rating: number;

  @Column({ name: 'created', type: 'datetime' })
  created: Date;

  @Column({ name: 'updated', type: 'datetime' })
  updated: Date;
}
