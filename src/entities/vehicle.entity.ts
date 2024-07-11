import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmVehicle } from './filmVehicle.entity';

@Entity('vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn({ name: 'id_vehicle', type: 'int'})
  id_vehicle: number;

  @Column({ name: 'url_vehicle', type: 'varchar'})
  url_vehicle: string

  @OneToMany(() => FilmVehicle, (filmVehicle) => filmVehicle.vehicle)
  film_vehicle: FilmVehicle[];
}