import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { FilmVehicle } from './filmVehicle.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('vehicle')
export class Vehicle {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_vehicle', type: 'int'})
  id_vehicle: number;
  @ApiProperty()
  @Column({ name: 'url_vehicle', type: 'varchar'})
  url_vehicle: string;

  @OneToMany(() => FilmVehicle, (filmVehicle) => filmVehicle.vehicles)
  film_vehicle: FilmVehicle[];
}