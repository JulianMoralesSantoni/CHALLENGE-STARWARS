import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmChrater } from './filmChracter.entity';

@Entity('chracter')
export class Chracter {
  @PrimaryGeneratedColumn({ name: 'id_chracter', type: 'int'})
  id_character: number;

  @Column({ name: 'url_chracter', type: 'varchar'})
  url_character: string

  @OneToMany(() => FilmChrater, (film_chracter) => film_chracter.chracter)
  film_chracter: FilmChrater[];
}
