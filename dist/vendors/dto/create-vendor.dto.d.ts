import { VendorStatus } from '../entities/vendor.entity';
export declare class CreateVendorDto {
    name: string;
    service: string;
    phone?: string;
    email?: string;
    agreedAmount: number;
    status?: VendorStatus;
    notes?: string;
}
