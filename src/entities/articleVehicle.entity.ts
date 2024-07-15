import { Entity } from 'typeorm/decorator/entity/Entity';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { Vehicle } from './vehicle.entity';
import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { Article } from './article.entity';
import { Column, JoinColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('articleVehicle')
export class ArticleVehicle {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article_vehicle', type: 'int' })
  id_article_vehicle: number;

  @ManyToOne(() => Vehicle, (vehicle) => vehicle.article_vehicle, {
    cascade: true,
  })
  @JoinColumn({ name: 'id_vehicle' })
  vehicles: Vehicle;

  @ManyToOne(() => Article, (article) => article.article_vehicles)
  @JoinColumn({ name: 'id_article' })
  article: Article;

  @ApiProperty()
  @Column({ name: 'star_date', type: 'datetime' })
  star_date: Date;

  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', nullable: true, default: null })
  end_date: Date;
}
