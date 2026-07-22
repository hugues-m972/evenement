import { Repository } from 'typeorm';
import { Expense } from './entities/expense.entity';
import { Event } from '../events/entities/event.entity';
import { Vendor } from '../vendors/entities/vendor.entity';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class ExpensesService {
    private readonly expenseRepository;
    private readonly eventRepository;
    private readonly vendorRepository;
    constructor(expenseRepository: Repository<Expense>, eventRepository: Repository<Event>, vendorRepository: Repository<Vendor>);
    create(eventId: string, createExpenseDto: CreateExpenseDto): Promise<Expense>;
    findAllByEvent(eventId: string): Promise<Expense[]>;
    findOne(id: string): Promise<Expense>;
    update(id: string, updateExpenseDto: UpdateExpenseDto): Promise<Expense>;
    remove(id: string): Promise<Expense>;
}
