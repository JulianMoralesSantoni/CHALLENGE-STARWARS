import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Chracter } from "./Chracter.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Film } from "./film.entity";
import { Column, JoinColumn } from "typeorm";

@Entity('filmChrater')
export class FilmChrater{

    @PrimaryGeneratedColumn({ name: 'id_film_chracter', type: 'int'})
    id_film_chracter: number

    @ManyToOne(() => Chracter, (chracter) => chracter.film_chracter)
    @JoinColumn({ name: "id_chracter" })
    chracter:Chracter;

    @ManyToOne(() => Film, (film) => film.film_chracter)
    @JoinColumn({ name: "id_film" })
    film:Film;

    @Column({ name: 'star_date', type: 'date' })
    star_date:Date

    @Column({ name: 'end_date', type: 'date', nullable:true, default:null })
    end_date:Date
}