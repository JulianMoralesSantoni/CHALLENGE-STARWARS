import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmSpecie } from './filmSpecie.entity';

@Entity('specie')
export class Specie {
  @PrimaryGeneratedColumn({ name: 'id_specie', type: 'int'})
  id_specie: number;

  @Column({ name: 'url_specie', type: 'varchar'})
  url_specie: string

  @OneToMany(() => FilmSpecie, (filmSpecie) => filmSpecie.specie)
  film_specie: FilmSpecie[];
}