import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Article } from './article.entity';
import { Column, JoinColumn } from 'typeorm';
import { Planet } from './planet.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('articlePlanet')
export class ArticlePlanet {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_planet', type: 'int' })
  id_article_planet: number;

  @ManyToOne(() => Planet, (planet) => planet.article_planet, { cascade: true })
  @JoinColumn({ name: 'id_planet' })
  planets: Planet;

  @ManyToOne(() => Article, (article) => article.article_planets)
  @JoinColumn({ name: 'id_article' })
  article: Article;
  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;
  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;
}
