import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, BeforeUpdate, BeforeInsert } from 'typeorm';
import { FilmVehicle } from './filmVehicle.entity';
import { Starship } from './starship.entity';
import { FilmStarShip } from './filmStarship.entity';
import { FilmSpecie } from './filmSpecie.entity';
import { FilmPlanet } from './filmPlanet.entity';
import { FilmChrater } from './filmChracter.entity';

@Entity('film')
export class Film {
  @PrimaryGeneratedColumn({ name: 'id_film', type: 'int'})
  id_film: number;

  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @Column({ name: 'episode_id', type: 'int' })
  episode_id: number;

  @Column({ name: 'opening_crawl', type: 'varchar' })
  opening_crawl: string;

  @Column({ name: 'director', type: 'varchar' })
  director: string;

  @Column({ name: 'producer', type: 'varchar' })
  producer: string;

  @Column({ name: 'release_date', type: 'varchar' })
  release_date: string;

  @OneToMany(() => FilmChrater, (film_chracter) => film_chracter.film, {cascade:true})
  film_chracter: FilmChrater[];

  @OneToMany(() => FilmPlanet, (film_palent) => film_palent.film, {cascade:true})
  film_planet: FilmPlanet[];

  @OneToMany(() => FilmStarShip, (starship) => starship.film, {cascade:true})
  film_starship: FilmStarShip[];

  @OneToMany(() => FilmVehicle, (film_vehicle) => film_vehicle.film, {cascade:true})
  film_vehicle: FilmVehicle[];

  @OneToMany(() => FilmSpecie, (film_specie) => film_specie.film, {cascade:true})
  film_specie: FilmSpecie[];

  @Column({ name: 'created', type: 'datetime' })
  created: Date;

  @Column({ name: 'edited', type: 'datetime', default:null, nullable: true })
  edited: Date;

  @Column({ name: 'url', type: 'varchar' })
  url: string;

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