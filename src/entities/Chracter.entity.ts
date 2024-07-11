import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmChrater } from './filmChracter.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('chracter')
export class Chracter {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_chracter', type: 'int'})
  id_chracter: number;

  @ApiProperty()
  @Column({ name: 'url_chracter', type: 'varchar'})
  url_chracter: string

  @OneToMany(() => FilmChrater, (film_chracter) => film_chracter.chracters)
  film_chracter: FilmChrater[];
}
