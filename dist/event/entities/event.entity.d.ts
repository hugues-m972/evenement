import { User } from '../../users/entities/user.entity';
export declare enum EventType {
    PRIVATE = "PRIVATE",
    PUBLIC = "PUBLIC"
}
export declare class Event {
    id: string;
    title: string;
    description: string;
    type: EventType;
    category: string;
    location: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    owner: User;
    createdAt: Date;
}
