import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Article } from './article.entity';

@Entity('genre')
export class Genre  {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_genre', type: 'int' })
  id_genre : number;

  @ApiProperty()
  @Column({ name: 'genre_name', type: 'varchar' })
  genre_name: string;

  @ManyToMany(() => Article, (article) => article.articleType)
  article: Article[];
}
