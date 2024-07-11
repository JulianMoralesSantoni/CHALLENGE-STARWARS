import { Entity } from "typeorm/decorator/entity/Entity";
import { ManyToOne } from "typeorm/decorator/relations/ManyToOne";
import { Vehicle } from "./vehicle.entity";
import { PrimaryGeneratedColumn } from "typeorm/decorator/columns/PrimaryGeneratedColumn";
import { Film } from "./film.entity";
import { Column, JoinColumn } from "typeorm";
import { ApiProperty } from "@nestjs/swagger";

@Entity('filmVehicle')
export class FilmVehicle{
    @ApiProperty()
    @PrimaryGeneratedColumn({ name: 'id_film_vehicle', type: 'int'})
    id_film_vehicle: number

    @ManyToOne(() => Vehicle, (vehicle) => vehicle.film_vehicle)
    @JoinColumn({ name: "id_vehicle" })
    vehicles:Vehicle;

    @ManyToOne(() => Film, (film) => film.film_vehicles)
    @JoinColumn({ name: "id_film" })
    film:Film;
    @ApiProperty()
    @Column({ name: 'star_date', type: 'date' })
    star_date:Date
    @ApiProperty()
    @Column({ name: 'end_date', type: 'date', nullable:true, default:null })
    end_date:Date
}