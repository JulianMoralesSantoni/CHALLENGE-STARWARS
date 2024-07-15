import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ArticleStarShip } from './articleStarship.entity';

@Entity('starship')
export class Starship {
  @PrimaryGeneratedColumn({ name: 'id_starship', type: 'int' })
  id_starship: number;
  @ApiProperty()
  @Column({
    name: 'url_starship',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  url_starship: string;

  @ApiProperty()
  @Column({
    name: 'name_starship',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  name_starship: string;

  @ApiProperty()
  @Column({
    name: 'modelo_starship',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  modelo_starship: string;

  @ApiProperty()
  @Column({
    name: 'class_starship',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  class_starship: string;

  @OneToMany(() => ArticleStarShip, (filmStarship) => filmStarship.starships)
  article_starship: ArticleStarShip[];

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
