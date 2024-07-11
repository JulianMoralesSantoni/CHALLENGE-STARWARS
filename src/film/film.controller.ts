import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';

@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @Get('all')
  findAll() {
    return this.filmService.findAll();
  }

  @Get(':id')
  findOneFilm(@Param('id') id: string) {
    return this.filmService.findOne(+id);
  }

  @Get('findOneToDataBase/:id')
  findOneToDataBase(@Param('id') id: string) {
    return this.filmService.findOneToDataBase(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(+id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }
}
