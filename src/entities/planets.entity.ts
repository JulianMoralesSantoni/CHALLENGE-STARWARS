import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmPlanet } from './filmPlanet.entity';

@Entity('planet')
export class Planet {
  @PrimaryGeneratedColumn({ name: 'id_planet', type: 'int'})
  id_planet: number;

  @Column({ name: 'url_planet', type: 'varchar'})
  url_planet: string

  @OneToMany(() => FilmPlanet, (filmSpecie) => filmSpecie.planet)
  film_planet: FilmPlanet[];
}