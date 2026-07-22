import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { randomBytes } from 'crypto';
import { Registration } from './entities/registration.entity';
import { Event } from '../events/entities/event.entity';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Injectable()
export class RegistrationsService {
  constructor(
    @InjectRepository(Registration)
    private readonly registrationRepository: Repository<Registration>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(eventId: string, createRegistrationDto: CreateRegistrationDto) {
    const event = await this.eventRepository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Event with id ${eventId} not found`);
    }

    const existing = await this.registrationRepository.findOne({
      where: { event: { id: eventId }, phone: createRegistrationDto.phone },
    });
    if (existing) {
      throw new ConflictException('Ce numéro est déjà inscrit à cet événement');
    }

    const registration = this.registrationRepository.create({
      ...createRegistrationDto,
      event,
      qrCode: randomBytes(16).toString('hex'),
    });
    return this.registrationRepository.save(registration);
  }

  async findAllByEvent(eventId: string) {
    return this.registrationRepository.find({ where: { event: { id: eventId } } });
  }

  async findOne(id: string) {
    const registration = await this.registrationRepository.findOne({ where: { id } });
    if (!registration) {
      throw new NotFoundException(`Registration with id ${id} not found`);
    }
    return registration;
  }

  async update(id: string, updateRegistrationDto: UpdateRegistrationDto) {
    const registration = await this.findOne(id);
    Object.assign(registration, updateRegistrationDto);
    return this.registrationRepository.save(registration);
  }

  async remove(id: string) {
    const registration = await this.findOne(id);
    return this.registrationRepository.remove(registration);
  }
}