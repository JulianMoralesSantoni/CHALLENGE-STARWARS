import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Specie } from './specie.entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Article } from './article.entity';
import { Column, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('articleSpecie')
export class ArticleSpecie {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_vehicle', type: 'int' })
  id_article_specie: number;

  @ManyToOne(() => Specie, (specie) => specie.article_specie, { cascade: true })
  @JoinColumn({ name: 'id_specie' })
  species: Specie;

  @ManyToOne(() => Article, (film) => film.article_species)
  @JoinColumn({ name: 'id_film' })
  article: Article;
  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;
  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;
}
