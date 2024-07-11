import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Vehicle } from "./vehicle.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Film } from "./film.entity";
import { Column, JoinColumn } from "typeorm";
import { Planet } from "./planets.entity";

@Entity('filmPlanet')
export class FilmPlanet{

    @PrimaryGeneratedColumn({ name: 'id_film_planet', type: 'int'})
    id_film_planet: number

    @ManyToOne(() => Planet, (planet) => planet.film_planet)
    @JoinColumn({ name: "id_planet" })
    planet:Planet;

    @ManyToOne(() => Film, (film) => film.film_planet)
    @JoinColumn({ name: "id_film" })
    film:Film;

    @Column({ name: 'star_date', type: 'date' })
    star_date:Date

    @Column({ name: 'end_date', type: 'date', nullable:true, default:null })
    end_date:Date
}