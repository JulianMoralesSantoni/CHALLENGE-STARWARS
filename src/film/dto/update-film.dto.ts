import { PartialType } from '@nestjs/swagger';
import { CreateFilmDto } from './create-film.dto';
import { IsNumber } from 'class-validator';

export class UpdateFilmDto extends PartialType(CreateFilmDto) {
    @IsNumber()
    id_film: number;
    
}
