import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsService {
    create(createVendorDto: CreateVendorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateVendorDto: UpdateVendorDto): string;
    remove(id: number): string;
}
