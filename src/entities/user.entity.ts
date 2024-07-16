import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserType } from './userType.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('user')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_user', type: 'int' })
  id_user: number;
  @ApiProperty()
  @Column({ name: 'user_email', type: 'varchar' })
  user_email: string;
  @ApiProperty()
  @Column({ name: 'user_last_name', type: 'varchar' })
  user_last_name: string;
  @ApiProperty()
  @Column({ name: 'user_created_date', type: 'datetime' })
  user_date_created: Date;
  @ApiProperty()
  @Column({ name: 'user_name', type: 'varchar' })
  user_name: string;
  @ApiProperty()
  @Column({ name: 'user_edit_date', type: 'datetime', nullable:true, default:null })
  edited: Date;
  @ApiProperty()
  @Column({ name: 'user_delete_date', type: 'datetime', nullable:true, default:null })
  user_delete_date: Date;
  @ApiProperty()
  @Column({ name: 'password', type: 'varchar' })
  password: string;
  @ApiProperty()
  @ManyToOne(() => UserType, (userType) => userType.user)
  userType: UserType;

  @BeforeInsert()
  updateDates() {
    this.user_date_created = new Date();
  }
}
