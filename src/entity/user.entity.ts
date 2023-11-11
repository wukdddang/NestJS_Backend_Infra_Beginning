import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';
import { ProfileModel } from './profile.entity';

export const ROLE = {
  USER: 'user',
  ADMIN: 'admin',
} as const;

@Entity()
export class UserModel {
  // @PrimaryGeneratedColumn()
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  // @PrimaryColumn()
  id: number;

  @Column()
  email: string;

  // @Column({
  //   type: 'varchar',
  //   name: 'title',
  //   length: 300,
  //   nullable: true,
  //   update: true,
  //   select: false,
  //   default: 'default value',
  //   unique: false,
  // })
  // title: string;

  @Column({
    type: 'enum',
    enum: ROLE,
    default: ROLE.USER,
  })
  role: (typeof ROLE)[keyof typeof ROLE];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;

  @Column()
  @Generated('increment')
  additionalId: number;

  @OneToOne(() => ProfileModel, (profile) => profile.user)
  @JoinColumn()
  profile: ProfileModel;
}
