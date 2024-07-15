import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from '../entities/article.entity';
import { ErrorDto } from '../utils/errorDto';
@ApiTags('Article controller')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @Post()
  @ApiOperation({
    summary: 'This method create a film',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'Ya existe una pelicula correpondiente al episodio 4',
    type: ErrorDto,
  })
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @Get('all')
  @ApiOperation({
    summary: 'This method get all films',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  findAll() {
    return this.filmService.findAllApiIntegration();
  }

  @Post('filmSincronization')
  vehicleSincronization() {
    return this.filmService.filmSincronization();
  }

  @Get('allToDataBase')
  @ApiOperation({
    summary: 'This method get all films',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  findAllToDataBase() {
    return this.filmService.findAllToDataBase();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'This method get a film for id',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  findOneFilm(@Param('id') id: string) {
    return this.filmService.findOne(+id);
  }

  @Get('findOneToDataBase/:id')
  @ApiOperation({
    summary: 'This method get a film to data base',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  findOneToDataBase(@Param('id') id: string) {
    return this.filmService.findOneToDataBase(+id);
  }

  @Get('chracter')
  getToChracterApi(@Query('url') url: string) {
    return this.filmService.getChracterAPI(url);
  }

  @Patch('update')
  @ApiOperation({
    summary: 'This method udpate a film',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  update(@Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(updateFilmDto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'This method delete a film',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: '',
    type: ErrorDto,
  })
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }
}
