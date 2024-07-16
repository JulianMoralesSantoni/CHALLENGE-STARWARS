import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { FilmService } from './film.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Article } from '../entities/article.entity';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';
import { Roles } from 'src/auth/decorator/role.decorator';
import { RolesGuard } from 'src/auth/guards/role.guard';
import { ReportDto } from './dto/report.dto';
@ApiTags('Article controller')
@Controller('film')
export class FilmController {
  constructor(private readonly filmService: FilmService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @Post('create')
  @ApiOperation({
    summary: 'Este metodo crea una pelicula o serie',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'Ya existe una pelicula correpondiente al episodio 4',
  })
  @ApiHeader({
    name: 'Authorization',
    description:
      'Insertar el token que se obtuvo cuando se logueo en el sistema',
    example: 'Bearer {tokenContent}',
    
  })
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmService.create(createFilmDto);
  }

  @Get('all')
  @ApiOperation({
    summary: 'Este metodo devuelve todas las peliculas de ApiStarWars',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error al comunicarse con la api de STAR WARS',
  })
  findAll() {
    return this.filmService.findAllApiIntegration();
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @Post('filmSincronization')
  @ApiOperation({
    summary:
      'Este metodo sincroniza el contenido de la api STAR WARS con la base de datos',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: ReportDto,
  })
  @ApiHeader({
    name: 'Authorization',
    description:
      'Insertar el token que se obtuvo cuando se logueo en el sistema',
    example: 'Bearer {tokenContent}',
  })
  vehicleSincronization() {
    return this.filmService.filmSincronization();
  }

  @Get('allToDataBase')
  @ApiOperation({
    summary: 'Este metodo devuelve una lista de articulos',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 500,
    description:
      'Ocurrio un error, no se puede consultar la lista de articulos',
  })
  findAllToDataBase() {
    return this.filmService.findAllToDataBase();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Este metodo busca una pelicula por id en la apiStarWars',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error, no se pudo conectar con la apiStarWars',
  })
  findOneFilm(@Param('id') id: string) {
    return this.filmService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Usuario Regular')
  @Get('findOneToDataBase/:id')
  @ApiOperation({
    summary: 'Este metodo trae una pelicula por id de la base de datos',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'No existe el articulo con Id = 1',
  })
  @ApiResponse({
    status: 500,
    description:
      'Ocurrio un error, no se pudo devolver la información del articulo',
  })
  @ApiHeader({
    name: 'Authorization',
    description:
      'Insertar el token que se obtuvo cuando se logueo en el sistema',
    example: 'Bearer {tokenContent}',
  })
  findOneToDataBase(@Param('id') id: string) {
    return this.filmService.findOneToDataBase(+id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @Patch('update')
  @ApiOperation({
    summary: 'Este metodo actualiza un articulo',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'No existe una pelicula correpondiente al siguiente id: 1',
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error, no se pudo actualizar el articulo',
  })
  @ApiHeader({
    name: 'Authorization',
    description:
      'Insertar el token que se obtuvo cuando se logueo en el sistema',
    example: 'Bearer {tokenContent}',
  })
  update(@Body() updateFilmDto: UpdateFilmDto) {
    return this.filmService.update(updateFilmDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('Administrador')
  @Delete(':id')
  @ApiOperation({
    summary: 'Este metodo borra un articulo',
  })
  @ApiResponse({
    status: 200,
    description: 'OK',
    type: Article,
  })
  @ApiResponse({
    status: 400,
    description: 'No existe el articulo con id = 1',
  })
  @ApiResponse({
    status: 400,
    description: 'El articulo ya se encuentra dado de baja',
  })
  @ApiResponse({
    status: 500,
    description: 'Ocurrio un error, no pudo borrar el articulo',
  })
  @ApiHeader({
    name: 'Authorization',
    description:
      'Insertar el token que se obtuvo cuando se logueo en el sistema',
    example: 'Bearer {tokenContent}',
  })
  remove(@Param('id') id: string) {
    return this.filmService.remove(+id);
  }
}
