import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmStarShip } from './filmStarship.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('starship')
export class Starship {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_starship', type: 'int'})
  id_starship: number;
  @ApiProperty()
  @Column({ name: 'url_starship', type: 'varchar'})
  url_starship: string

  @OneToMany(() => FilmStarShip, (filmStarship) => filmStarship.starships)
  film: FilmStarShip[];
}