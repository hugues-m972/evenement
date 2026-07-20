import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationsController {
    private readonly registrationsService;
    constructor(registrationsService: RegistrationsService);
    create(createRegistrationDto: CreateRegistrationDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: string): string;
}
