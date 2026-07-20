import { Event } from '../../events/entities/event.entity';
export declare class Registration {
    id: string;
    event: Event;
    fullName: string;
    phone: string;
    email: string;
    qrCode: string;
    checkedIn: boolean;
    checkedInAt: Date;
    registeredAt: Date;
}
