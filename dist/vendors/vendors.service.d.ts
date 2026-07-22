import { Repository } from 'typeorm';
import { Vendor } from './entities/vendor.entity';
import { Event } from '../events/entities/event.entity';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';
export declare class VendorsService {
    private readonly vendorRepository;
    private readonly eventRepository;
    constructor(vendorRepository: Repository<Vendor>, eventRepository: Repository<Event>);
    create(eventId: string, createVendorDto: CreateVendorDto): Promise<Vendor>;
    findAllByEvent(eventId: string): Promise<Vendor[]>;
    findOne(id: string): Promise<Vendor>;
    update(id: string, updateVendorDto: UpdateVendorDto): Promise<Vendor>;
    remove(id: string): Promise<Vendor>;
}
