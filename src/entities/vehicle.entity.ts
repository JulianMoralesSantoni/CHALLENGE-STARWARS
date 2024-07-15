import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ArticleVehicle } from './articleVehicle.entity';

@Entity('vehicle')
export class Vehicle {
  @PrimaryGeneratedColumn({ name: 'id_vehicle', type: 'int' })
  id_vehicle: number;
  @ApiProperty()
  @Column({
    name: 'url_vehicle',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  url_vehicle: string;

  @ApiProperty()
  @Column({
    name: 'name_vehicle',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  name_vehicle: string;

  @ApiProperty()
  @Column({
    name: 'modelo_vehicle',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  modelo_vehicle: string;

  @ApiProperty()
  @Column({
    name: 'class_vehicle',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  class_vehicle: string;

  @OneToMany(
    () => ArticleVehicle,
    (article_vehicle) => article_vehicle.vehicles,
  )
  article_vehicle: ArticleVehicle[];
  @Column({ name: 'url_sincronizated', type: 'boolean' })
  url_sincronizated: boolean;

  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;

  @Column({ name: 'edited', type: 'datetime', nullable: true, default: null })
  edited: Date;

  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;

  @BeforeInsert()
  updateDates() {
    this.star_date = new Date();
  }
}
