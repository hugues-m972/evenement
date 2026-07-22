import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { Event } from '../events/entities/event.entity';
import { Vendor } from '../vendors/entities/vendor.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense)
    private readonly expenseRepository: Repository<Expense>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async create(eventId: string, createExpenseDto: CreateExpenseDto) {
    const event = await this.eventRepository.findOne({ where: { id: eventId } });
    if (!event) {
      throw new NotFoundException(`Event with id ${eventId} not found`);
    }

    let vendor: Vendor | null = null;
    if (createExpenseDto.vendorId) {
      vendor = await this.vendorRepository.findOne({ where: { id: createExpenseDto.vendorId } });
      if (!vendor) {
        throw new NotFoundException(`Vendor with id ${createExpenseDto.vendorId} not found`);
      }
    }

    const { vendorId, ...rest } = createExpenseDto;
    const expense = this.expenseRepository.create({
      ...rest,
      event,
      vendor: vendor ?? undefined,
    });
    return this.expenseRepository.save(expense);
  }

  async findAllByEvent(eventId: string) {
    return this.expenseRepository.find({ where: { event: { id: eventId } } });
  }

  async findOne(id: string) {
    const expense = await this.expenseRepository.findOne({ where: { id } });
    if (!expense) {
      throw new NotFoundException(`Expense with id ${id} not found`);
    }
    return expense;
  }

  async update(id: string, updateExpenseDto: UpdateExpenseDto) {
    const expense = await this.findOne(id);
    Object.assign(expense, updateExpenseDto);
    return this.expenseRepository.save(expense);
  }

  async remove(id: string) {
    const expense = await this.findOne(id);
    return this.expenseRepository.remove(expense);
  }
}