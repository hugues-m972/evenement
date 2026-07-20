import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationsService {
    create(createRegistrationDto: CreateRegistrationDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRegistrationDto: UpdateRegistrationDto): string;
    remove(id: number): string;
}
