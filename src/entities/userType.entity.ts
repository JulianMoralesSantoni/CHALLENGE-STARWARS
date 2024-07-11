import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
// import { Access } from './access.entity';
import { User } from './user.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('userType')
export class UserType {
  @ApiProperty()
  @PrimaryGeneratedColumn({ name: 'id_user_type', type: 'int' })
  id_user_type: number;
  @ApiProperty()
  @Column({ name: 'user_type_name', type: 'varchar' })
  user_type_name: string;
  @OneToMany(() => User, (user) => user.userType)
  user: User[];
}
