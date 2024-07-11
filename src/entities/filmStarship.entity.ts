import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Starship } from "./starship.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Film } from "./film.entity";
import { Column, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('filmStarShip')
export class FilmStarShip{
    @ApiProperty()
    @PrimaryGeneratedColumn({ name: 'id_film_starship', type: 'int'})
    id_film_starship: number

    @ManyToOne(() => Starship, (starship) => starship.film)
    @JoinColumn({ name: "id_starship" })
    starships:Starship;

    @ManyToOne(() => Film, (film) => film.film_starships)
    @JoinColumn({ name: "id_film" })
    film:Film;
    @ApiProperty()
    @Column({ name: 'star_date', type: 'date' })
    star_date:Date
    @ApiProperty()
    @Column({ name: 'end_date', type: 'date', nullable:true, default:null })
    end_date:Date
}