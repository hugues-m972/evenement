import { Repository } from 'typeorm';
import { Registration } from './entities/registration.entity';
import { Event } from '../events/entities/event.entity';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';
export declare class RegistrationsService {
    private readonly registrationRepository;
    private readonly eventRepository;
    constructor(registrationRepository: Repository<Registration>, eventRepository: Repository<Event>);
    create(eventId: string, createRegistrationDto: CreateRegistrationDto): Promise<Registration>;
    findAllByEvent(eventId: string): Promise<Registration[]>;
    findOne(id: string): Promise<Registration>;
    update(id: string, updateRegistrationDto: UpdateRegistrationDto): Promise<Registration>;
    remove(id: string): Promise<Registration>;
}
