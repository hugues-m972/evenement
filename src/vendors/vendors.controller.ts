import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vendor.dto';
import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('events/:eventId/vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Param('eventId') eventId: string, @Body() createVendorDto: CreateVendorDto) {
    return this.vendorsService.create(eventId, createVendorDto);
  }

  @Get()
  findAll(@Param('eventId') eventId: string) {
    return this.vendorsService.findAllByEvent(eventId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVendorDto: UpdateVendorDto) {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(id);
  }
}