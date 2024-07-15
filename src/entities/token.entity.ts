import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('token')
export class Token {
  @PrimaryGeneratedColumn({ name: 'id_token', type: 'int' })
  id_token: number;
  @Column({ name: 'token', type: 'varchar' })
  token: string;
  @Column({ name: 'start_date', type: 'datetime' })
  start_date: Date;
  @Column({ name: 'user_email', type: 'varchar' })
  user_email: string;
}
