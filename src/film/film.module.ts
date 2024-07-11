import { Module } from '@nestjs/common';
import { FilmService } from './film.service';
import { FilmController } from './film.controller';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Film } from 'src/entities/film.entity';

@Module({
  imports:[HttpModule,
    TypeOrmModule.forFeature([Film])
  ],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
