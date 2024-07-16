import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([Article]), JwtModule],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
