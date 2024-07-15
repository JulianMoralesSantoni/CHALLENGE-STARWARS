import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Chracter } from './chracter.entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Article } from './article.entity';
import { Column, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('articleChrater')
export class ArticleChrater {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_chracter', type: 'int' })
  id_article_chracter: number;

  @ManyToOne(() => Chracter, (chracter) => chracter.article_chracter, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_chracter' })
  chracters: Chracter;

  @ManyToOne(() => Article, (article) => article.article_chracters)
  @JoinColumn({ name: 'id_article' })
  article: Article;
  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;

  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;
}
