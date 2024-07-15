import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ArticlePlanet } from './articlePlanet.entity';

@Entity('planet')
export class Planet {
  @PrimaryGeneratedColumn({ name: 'id_planet', type: 'int' })
  id_planet: number;

  @ApiProperty()
  @Column({
    name: 'url_planet',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  url_planet: string;

  @ApiProperty()
  @Column({
    name: 'climate_planet',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  climate_planet: string;

  @ApiProperty()
  @Column({
    name: 'name_planet',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  name_planet: string;

  @ApiProperty()
  @Column({
    name: 'gravity_planet',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  gravity_planet: string;

  @OneToMany(() => ArticlePlanet, (filmSpecie) => filmSpecie.planets)
  article_planet: ArticlePlanet[];

  // @OneToMany(() => Chracter, (chracter) => chracter.planet)
  // chracter: Chracter[];

  @Column({ name: 'url_sincronizated', type: 'boolean' })
  url_sincronizated: boolean;

  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;

  @ApiProperty()
  @Column({ name: 'edited', type: 'datetime', nullable: true, default: null })
  edited: Date;

  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;

  @BeforeInsert()
  updateDates() {
    this.star_date = new Date();
  }
}
