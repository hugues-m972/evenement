import { ExpensesService } from './expenses.service';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
export declare class ExpensesController {
    private readonly expensesService;
    constructor(expensesService: ExpensesService);
    create(eventId: string, createExpenseDto: CreateExpenseDto): Promise<import("./entities/expense.entity").Expense>;
    findAll(eventId: string): Promise<import("./entities/expense.entity").Expense[]>;
    findOne(id: string): Promise<import("./entities/expense.entity").Expense>;
    update(id: string, updateExpenseDto: UpdateExpenseDto): Promise<import("./entities/expense.entity").Expense>;
    remove(id: string): Promise<import("./entities/expense.entity").Expense>;
}
