import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Article])],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
