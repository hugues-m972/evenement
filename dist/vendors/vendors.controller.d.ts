import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsController {
    private readonly vendorsService;
    constructor(vendorsService: VendorsService);
    create(createVendorDto: CreateVendorDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateVendorDto: UpdateVendorDto): string;
    remove(id: string): string;
}
