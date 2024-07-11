import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmStarShip } from './filmStarship.entity';

@Entity('starship')
export class Starship {
  @PrimaryGeneratedColumn({ name: 'id_starship', type: 'int'})
  id_starship: number;

  @Column({ name: 'url_starship', type: 'varchar'})
  url_starship: string

  @OneToMany(() => FilmStarShip, (filmStarship) => filmStarship.starship)
  film: FilmStarShip[];
}