import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmSpecie } from './filmSpecie.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('specie')
export class Specie {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_specie', type: 'int'})
  id_specie: number;
  @ApiProperty()
  @Column({ name: 'url_specie', type: 'varchar'})
  url_specie: string

  @OneToMany(() => FilmSpecie, (filmSpecie) => filmSpecie.species)
  film_specie: FilmSpecie[];
}