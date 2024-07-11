import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Specie } from "./specie.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Film } from "./film.entity";
import { Column, JoinColumn } from "typeorm";

@Entity('filmSpecie')
export class FilmSpecie{

    @PrimaryGeneratedColumn({ name: 'id_film_vehicle', type: 'int'})
    id_film_specie: number

    @ManyToOne(() => Specie, (specie) => specie.film_specie)
    @JoinColumn({ name: "id_specie" })
    specie:Specie;

    @ManyToOne(() => Film, (film) => film.film_specie)
    @JoinColumn({ name: "id_film" })
    film:Film;

    @Column({ name: 'star_date', type: 'date' })
    star_date:Date

    @Column({ name: 'end_date', type: 'date', nullable:true, default:null })
    end_date:Date
}