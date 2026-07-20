import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  Unique,
} from 'typeorm';
import { Event } from '../../events/entities/event.entity';

@Unique(['event', 'phone'])
@Entity()
export class Registration {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Event)
  event: Event;

  @Column()
  fullName: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  email: string;

  @Column({ unique: true })
  qrCode: string;

  @Column({ default: false })
  checkedIn: boolean;

  @Column({ nullable: true })
  checkedInAt: Date;

  @CreateDateColumn()
  registeredAt: Date;
}