import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';
import { Guest } from './entities/guest.entity';
import { Event } from '../events/entities/event.entity';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Injectable()
export class GuestsService {
  constructor(
    @InjectRepository(Guest)
    private readonly guestRepository: Repository<Guest>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(eventId: string, createGuestDto: CreateGuestDto) {
    const event = await this.eventRepository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Event with id ${eventId} not found`);
    }

    const guest = this.guestRepository.create({
      ...createGuestDto,
      event,
      rsvpToken: randomBytes(16).toString('hex'),
    });

    return this.guestRepository.save(guest);
  }

  async findAllByEvent(eventId: string) {
    return this.guestRepository.find({ where: { event: { id: eventId } } });
  }

  async findOne(id: string) {
    const guest = await this.guestRepository.findOne({ where: { id } });
    if (!guest) {
      throw new NotFoundException(`Guest with id ${id} not found`);
    }
    return guest;
  }

  async update(id: string, updateGuestDto: UpdateGuestDto) {
    const guest = await this.findOne(id);
    Object.assign(guest, updateGuestDto);
    return this.guestRepository.save(guest);
  }

  async remove(id: string) {
    const guest = await this.findOne(id);
    return this.guestRepository.remove(guest);
  }
}