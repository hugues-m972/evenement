import { Event } from '../../events/entities/event.entity';
export declare enum RsvpStatus {
    PENDING = "PENDING",
    YES = "YES",
    NO = "NO",
    MAYBE = "MAYBE"
}
export declare class Guest {
    id: string;
    event: Event;
    fullName: string;
    phone: string;
    email: string;
    plusOnes: number;
    rsvpStatus: RsvpStatus;
    rsvpToken: string;
    notes: string;
    tokenExpiresAt: Date;
    respondedAt: Date;
    createdAt: Date;
}
