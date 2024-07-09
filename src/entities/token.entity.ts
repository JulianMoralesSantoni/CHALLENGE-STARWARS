import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('token')
export class Token {
    @PrimaryGeneratedColumn({ name: 'id_token', type: 'int'})
    id_token:number;
    @Column({ name: 'user_email', type: 'varchar' })
    token:string;
    @Column({ name: 'token_last_name', type: 'date' })
    start_date:string;
}