import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: RegistrationsService);
    create(eventId: string, createRegistrationDto: CreateRegistrationDto): Promise<import("./entities/registration.entity").Registration>;
    findAll(eventId: string): Promise<import("./entities/registration.entity").Registration[]>;
    findOne(id: string): Promise<import("./entities/registration.entity").Registration>;
    update(id: string, updateRegistrationDto: UpdateRegistrationDto): Promise<import("./entities/registration.entity").Registration>;
    remove(id: string): Promise<import("./entities/registration.entity").Registration>;
}
