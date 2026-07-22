import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegistrationsService } from './registrations.service';
import { CreateRegistrationDto } from './dto/create-registration.dto';
import { UpdateRegistrationDto } from './dto/update-registration.dto';

@Controller('events/:eventId/registrations')
export class RegistrationsController {
  constructor(private readonly registrationsService: RegistrationsService) {}

  @Post()
  create(@Param('eventId') eventId: string, @Body() createRegistrationDto: CreateRegistrationDto) {
    return this.registrationsService.create(eventId, createRegistrationDto);
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.registrationsService.findAllByEvent(eventId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.registrationsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRegistrationDto: UpdateRegistrationDto) {
    return this.registrationsService.update(id, updateRegistrationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.registrationsService.remove(id);
  }
}