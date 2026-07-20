import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Event } from '../../events/entities/event.entity';

export enum VendorStatus {
  CONTACTED = 'CONTACTED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
}

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Event)
  event: Event;

  @Column()
  name: string;

  @Column()
  service: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  agreedAmount: number;

  @Column({ type: 'enum', enum: VendorStatus, default: VendorStatus.CONTACTED })
  status: VendorStatus;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @CreateDateColumn()
  createdAt: Date;
}