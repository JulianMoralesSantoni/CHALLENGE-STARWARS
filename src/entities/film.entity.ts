import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BeforeUpdate, BeforeInsert } from 'typeorm';
import { FilmVehicle } from './filmVehicle.entity';
import { Starship } from './starship.entity';
import { FilmStarShip } from './filmStarship.entity';
import { FilmSpecie } from './filmSpecie.entity';
import { FilmPlanet } from './filmPlanet.entity';
import { FilmChrater } from './filmChracter.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('film')
export class Film {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_film', type: 'int'})
  id_film: number;

  @ApiProperty()
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @ApiProperty()
  @Column({ name: 'episode_id', type: 'int' })
  episode_id: number;

  @ApiProperty()
  @Column({ name: 'opening_crawl', type: 'varchar' })
  opening_crawl: string;

  @ApiProperty()
  @Column({ name: 'director', type: 'varchar' })
  director: string;

  @ApiProperty()
  @Column({ name: 'producer', type: 'varchar' })
  producer: string;

  @ApiProperty()
  @Column({ name: 'release_date', type: 'varchar' })
  release_date: string;

  @ApiProperty()
  @OneToMany(() => FilmChrater, (film_chracter) => film_chracter.film, {cascade:true})
  film_chracters: FilmChrater[];

  @ApiProperty()
  @OneToMany(() => FilmPlanet, (film_palent) => film_palent.film, {cascade:true})
  film_planets: FilmPlanet[];

  @ApiProperty()
  @OneToMany(() => FilmStarShip, (starship) => starship.film, {cascade:true})
  film_starships: FilmStarShip[];

  @ApiProperty()
  @OneToMany(() => FilmVehicle, (film_vehicle) => film_vehicle.film, {cascade:true})
  film_vehicles: FilmVehicle[];

  @ApiProperty()
  @OneToMany(() => FilmSpecie, (film_specie) => film_specie.film, {cascade:true})
  film_species: FilmSpecie[];

  @ApiProperty()
  @Column({ name: 'created', type: 'datetime' })
  created: Date;

  @ApiProperty()
  @Column({ name: 'edited', type: 'datetime', default:null, nullable: true })
  edited: Date;

  @ApiProperty()
  @Column({ name: 'url', type: 'varchar' })
  url: string;

  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', default:null, nullable: true })
  end_date: Date;

  @BeforeInsert()
    insertDates() {
        this.created = new Date()
    }

  @BeforeUpdate()
    updateDates() {
        this.edited = new Date()
    }
}