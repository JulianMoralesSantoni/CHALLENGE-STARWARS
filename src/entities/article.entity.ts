import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeUpdate,
  BeforeInsert,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { ArticleType } from './articleType.entity';
import { Season } from './season.entity';
import { ArticleChrater } from './articleChracter.entity';
import { ArticlePlanet } from './articlePlanet.entity';
import { ArticleSpecie } from './articleSpecie.entity';
import { ArticleStarShip } from './articleStarship.entity';
import { ArticleVehicle } from './articleVehicle.entity';
import { Genre } from './genre.entity';
@Entity('article')
export class Article {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_article', type: 'int' })
  id_article: number;

  @ApiProperty()
  @Column({ name: 'title', type: 'varchar' })
  title: string;

  @ApiProperty()
  @Column({ name: 'episode_id', type: 'int' })
  episode_id: number;

  @ApiProperty()
  @Column({ name: 'opening_crawl', type: 'varchar', length:1000 })
  opening_crawl: string;

  @ApiProperty()
  @Column({ name: 'director', type: 'varchar' })
  director: string;

  @ApiProperty()
  @Column({ name: 'producer', type: 'varchar' })
  producer: string;

  @ApiProperty()
  @Column({ name: 'release_date', type: 'varchar' })
  release_date: string;

  @ApiProperty()
  @OneToMany(
    () => ArticleChrater,
    (article_chracter) => article_chracter.article,
    {
      cascade: true,
    },
  )
  article_chracters: ArticleChrater[];

  @ApiProperty()
  @OneToMany(() => ArticlePlanet, (article_palent) => article_palent.article, {
    cascade: true,
  })
  article_planets: ArticlePlanet[];

  @ApiProperty()
  @OneToMany(() => ArticleStarShip, (starship) => starship.article, {
    cascade: true,
  })
  article_starships: ArticleStarShip[];

  @ApiProperty()
  @OneToMany(
    () => ArticleVehicle,
    (article_vehicle) => article_vehicle.article,
    {
      cascade: true,
    },
  )
  article_vehicles: ArticleVehicle[];

  @ApiProperty()
  @OneToMany(() => ArticleSpecie, (article_specie) => article_specie.article, {
    cascade: true,
  })
  article_species: ArticleSpecie[];

  @ApiProperty()
  @Column({ name: 'created', type: 'datetime' })
  created: Date;

  @ApiProperty()
  @Column({ name: 'edited', type: 'datetime', default: null, nullable: true })
  edited: Date;

  @ApiProperty()
  @Column({ name: 'url', type: 'varchar' })
  url: string;

  @ApiProperty()
  @Column({ name: 'end_date', type: 'datetime', default: null, nullable: true })
  end_date: Date;

  @ApiProperty()
  @ManyToOne(() => ArticleType, (articleType) => articleType.article)
  articleType: ArticleType;

  @ApiProperty()
  @ManyToMany(() => Genre, (genre) => genre.article)
  @JoinTable({name:'articlegenre', joinColumn:{name:'id_article'}, inverseJoinColumn:{name:'id_genre'}})
  genre: Genre[];

  @ApiProperty()
  @OneToMany(() => Season, (seasons) => seasons.article, {
    cascade: true,
  })
  seasons: Season[];

  @BeforeInsert()
  insertDates() {
    this.created = new Date();
  }

  @BeforeUpdate()
  updateDates() {
    this.edited = new Date();
  }
}
