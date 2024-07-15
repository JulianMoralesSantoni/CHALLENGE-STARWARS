import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserType } from './userType.entity';

@Entity('user')
export class User {
  
  @PrimaryGeneratedColumn({ name: 'id_user', type: 'int' })
  id_user: number;
  @Column({ name: 'user_email', type: 'varchar' })
  user_email: string;
  @Column({ name: 'user_last_name', type: 'varchar' })
  user_last_name: string;
  @Column({ name: 'user_created_date', type: 'datetime' })
  user_date_created: Date;
  @Column({ name: 'user_name', type: 'varchar' })
  user_name: string;
  @Column({ name: 'user_edit_date', type: 'datetime', nullable:true, default:null })
  edited: Date;
  @Column({ name: 'user_delete_date', type: 'datetime', nullable:true, default:null })
  user_delete_date: Date;
  @Column({ name: 'password', type: 'varchar' })
  password: string;
  @ManyToOne(() => UserType, (userType) => userType.user)
  userType: UserType;

  @BeforeInsert()
  updateDates() {
    this.user_date_created = new Date();
  }
}
