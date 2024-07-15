import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ArticleSpecie } from './articleSpecie.entity';

@Entity('specie')
export class Specie {
  @PrimaryGeneratedColumn({ name: 'id_specie', type: 'int' })
  id_specie: number;
  @ApiProperty()
  @Column({
    name: 'url_specie',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  url_specie: string;

  @ApiProperty()
  @Column({
    name: 'language_specie',
    type: 'varchar',
    length: 15,
    nullable: true,
    default: null,
  })
  language: string;

  @ApiProperty()
  @Column({
    name: 'name_specie',
    type: 'varchar',
    length: 15,
    nullable: true,
    default: null,
  })
  name: string;

  @ApiProperty()
  @Column({
    name: 'description_specie',
    type: 'varchar',
    length: 1000,
    nullable: true,
    default: null,
  })
  description: string;

  @OneToMany(() => ArticleSpecie, (filmSpecie) => filmSpecie.species)
  article_specie: ArticleSpecie[];

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
