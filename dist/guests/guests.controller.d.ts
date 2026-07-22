import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
export declare class GuestsController {
    private readonly guestsService;
    constructor(guestsService: GuestsService);
    create(eventId: string, createGuestDto: CreateGuestDto): Promise<import("./entities/guest.entity").Guest>;
    findAll(eventId: string): Promise<import("./entities/guest.entity").Guest[]>;
    findOne(id: string): Promise<import("./entities/guest.entity").Guest>;
    update(id: string, updateGuestDto: UpdateGuestDto): Promise<import("./entities/guest.entity").Guest>;
    remove(id: string): Promise<import("./entities/guest.entity").Guest>;
}
