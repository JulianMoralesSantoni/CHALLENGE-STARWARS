import { Test, TestingModule } from '@nestjs/testing';
import { FilmService } from './film.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

describe('FilmService', () => {
  let service: FilmService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([Article]), ConfigModule, HttpModule],
    }).compile();

    service = module.get<FilmService>(FilmService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
