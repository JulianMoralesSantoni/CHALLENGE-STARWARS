import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Access } from './access.entity';
import { User } from './user.entity';

@Entity('userType')
export class UserType {
  @PrimaryGeneratedColumn({ name: 'id_user_type', type: 'int' })
  id_user_type: number;
  @Column({ name: 'id_type_name', type: 'varchar' })
  user_type_name: string;
  @ManyToMany(() => Access, (access) => access.userType)
  @JoinTable()
  access: Access[];
  @OneToMany(() => User, (user) => user.userType)
  user: User[];
}
