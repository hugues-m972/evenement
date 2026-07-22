import { EventType } from '../entities/event.entity';
export declare class CreateEventDto {
    title: string;
    description?: string;
    type: EventType;
    category?: string;
    location: string;
    startDate: string;
    endDate?: string;
    capacity?: number;
}
