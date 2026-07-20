import { Event } from '../../events/entities/event.entity';
export declare enum VendorStatus {
    CONTACTED = "CONTACTED",
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED"
}
export declare class Vendor {
    id: string;
    event: Event;
    name: string;
    service: string;
    phone: string;
    email: string;
    agreedAmount: number;
    status: VendorStatus;
    notes: string;
    createdAt: Date;
}
