import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Event } from '../../events/entities/event.entity';

export enum RsvpStatus {
  PENDING = 'PENDING',
  YES = 'YES',
  NO = 'NO',
  MAYBE = 'MAYBE',
}

@Entity()
export class Guest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Event)
  event: Event;

  @Column()
  fullName: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ default: 0 })
  plusOnes: number;

  @Column({ type: 'enum', enum: RsvpStatus, default: RsvpStatus.PENDING })
  rsvpStatus: RsvpStatus;

  @Column({ unique: true })
  rsvpToken: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  tokenExpiresAt: Date;

  @Column({ nullable: true })
  respondedAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}