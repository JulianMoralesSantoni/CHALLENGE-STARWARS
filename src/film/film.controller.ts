import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Film } from 'src/entities/film.entity';
@ApiTags('Film controller')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Film,
  })
  @ApiResponse({
    status: 400,
    description: 'Ya existe una pelicula correpondiente al episodio 4',
    type: BadRequestException,
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error guardando la pelicula',
    type: InternalServerErrorException,
  })
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @Get('all')
  findAll() {
    return this.filmService.findAllApiIntegration();
  }

  @Get('allToDataBase')
  findAllToDataBase() {
    return this.filmService.findAllToDataBase();
  }

  @Get(':id')
  findOneFilm(@Param('id') id: string) {
    return this.filmService.findOne(+id);
  }

  @Get('findOneToDataBase/:id')
  findOneToDataBase(@Param('id') id: string) {
    return this.filmService.findOneToDataBase(+id);
  }

  @Patch('update')
  update(@Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }
}
