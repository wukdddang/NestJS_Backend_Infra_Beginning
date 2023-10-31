import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export const ROLE = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

@Entity()
export class UsersModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({
    type: 'enum',
    enum: ROLE,
    default: ROLE.USER,
  })
  role: (typeof ROLE)[keyof typeof ROLE];
}
