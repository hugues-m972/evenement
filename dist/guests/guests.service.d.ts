import { Repository } from 'typeorm';
import { Guest } from './entities/guest.entity';
import { Event } from '../events/entities/event.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
export declare class GuestsService {
    private readonly guestRepository;
    private readonly eventRepository;
    constructor(guestRepository: Repository<Guest>, eventRepository: Repository<Event>);
    create(eventId: string, createGuestDto: CreateGuestDto): Promise<Guest>;
    findAllByEvent(eventId: string): Promise<Guest[]>;
    findOne(id: string): Promise<Guest>;
    update(id: string, updateGuestDto: UpdateGuestDto): Promise<Guest>;
    remove(id: string): Promise<Guest>;
}
