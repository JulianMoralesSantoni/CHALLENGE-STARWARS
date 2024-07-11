import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmPlanet } from './filmPlanet.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('planet')
export class Planet {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_planet', type: 'int'})
  id_planet: number;
  @ApiProperty()
  @Column({ name: 'url_planet', type: 'varchar'})
  url_planet: string

  @OneToMany(() => FilmPlanet, (filmSpecie) => filmSpecie.planets)
  film_planet: FilmPlanet[];
}