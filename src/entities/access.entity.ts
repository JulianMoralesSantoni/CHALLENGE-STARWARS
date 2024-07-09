import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { UserType } from "./userType.entity"
@Entity('access')
export class Access {
    @PrimaryGeneratedColumn({ name: 'id_accesss_function', type: 'int'})
    id_accesss_function:number
    @Column({ name: 'access_function_code', type: 'varchar'})
    access_function_code:string
    @Column({ name: 'access_function_name', type: 'varchar'})
    access_function_name:string
    @ManyToMany(() => UserType, (userType) => userType.access)
    @JoinTable()
    userType: UserType[]
}