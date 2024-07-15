import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { ArticleChrater } from './articleChracter.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

@Entity('chracter')
export class Chracter {
  @PrimaryGeneratedColumn({ name: 'id_chracter', type: 'int' })
  id_chracter: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({
    name: 'name_chracter',
    type: 'varchar',
    length: 30,
    nullable: true,
    default: null,
  })
  name_chracter: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({
    name: 'name_actor',
    type: 'varchar',
    length: 30,
    nullable: true,
    default: null,
  })
  name_actor: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({
    name: 'description_chracter',
    type: 'varchar',
    length: 1000,
    nullable: true,
    default: null,
  })
  description_chracter: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Column({
    name: 'url_chracter',
    type: 'varchar',
    nullable: true,
    default: null,
  })
  url_chracter: string;

  @OneToMany(
    () => ArticleChrater,
    (article_chracter) => article_chracter.chracters,
  )
  article_chracter: ArticleChrater[];


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
