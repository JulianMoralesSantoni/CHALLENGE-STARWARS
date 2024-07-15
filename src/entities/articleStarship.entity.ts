import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Starship } from './starship.entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Article } from './article.entity';
import { Column, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('articleStarShip')
export class ArticleStarShip {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_starship', type: 'int' })
  id_article_starship: number;

  @ManyToOne(() => Starship, (starship) => starship.article_starship, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_starship' })
  starships: Starship;

  @ManyToOne(() => Article, (article) => article.article_starships)
  @JoinColumn({ name: 'id_article' })
  article: Article;
  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;
  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;
}
