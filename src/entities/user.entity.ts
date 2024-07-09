import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserType } from './userType.entity';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn({ name: 'id_user', type: 'int'})
  id_user:number;
  @Column({ name: 'user_email', type: 'varchar' })
  user_email:string;
  @Column({ name: 'user_last_name', type: 'varchar' })
  user_last_name:string;
  @Column({ name: 'user_created_date', type: 'date' })
  user_created_date:Date;
  @Column({ name: 'user_name', type: 'varchar' })
  user_name:string;
  @ManyToOne(() => UserType, (userType) => userType.user)
  userType:UserType;

  @BeforeInsert()
    updateDates() {
        this.user_created_date = new Date()
    }
}

