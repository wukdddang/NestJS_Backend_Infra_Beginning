import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity()
export class UserModel {
  // @PrimaryGeneratedColumn()
  // @PrimaryGeneratedColumn('uuid')
  @PrimaryGeneratedColumn()
  // @PrimaryColumn()
  id: number;

  @Column({
    type: 'varchar',
    name: 'title',
    length: 300,
    nullable: true,
    update: true,
    select: false,
    default: 'default value',
    unique: true,
  })
  title: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @VersionColumn()
  version: number;

  @Column()
  @Generated('increment')
  additionalId: number;
}
