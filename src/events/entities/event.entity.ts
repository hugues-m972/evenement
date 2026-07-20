import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

export enum EventType {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
}

@Entity()
export class Event {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: EventType })
  type: EventType;

  @Column({ nullable: true })
  category: string;

  @Column()
  location: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  endDate: Date;

  @Column({ nullable: true })
  capacity: number;

  @ManyToOne(() => User)
  owner: User;

  @CreateDateColumn()
  createdAt: Date;
}