import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';

@Controller('events/:eventId/guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Post()
  create(@Param('eventId') eventId: string, @Body() createGuestDto: CreateGuestDto) {
    return this.guestsService.create(eventId, createGuestDto);
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.guestsService.findAllByEvent(eventId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.guestsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestsService.update(id, updateGuestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(id);
  }
}