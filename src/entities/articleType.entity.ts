import { ApiProperty } from '@nestjs/swagger';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Article } from './article.entity';

@Entity('articleType')
export class ArticleType {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_type', type: 'int' })
  id_article_type: number;

  @ApiProperty()
  @Column({ name: 'article_type_name', type: 'varchar' })
  article_type_name: string;

  @OneToMany(() => Article, (article) => article.articleType)
  article: Article[];
}
