import { Event } from '../../events/entities/event.entity';
import { Vendor } from '../../vendors/entities/vendor.entity';
import { User } from '../../users/entities/user.entity';
export declare class Expense {
    id: string;
    event: Event;
    vendor: Vendor;
    label: string;
    amount: number;
    date: Date;
    createdBy: User;
    createdAt: Date;
}
