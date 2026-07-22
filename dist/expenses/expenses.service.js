"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const expense_entity_1 = require("./entities/expense.entity");
const event_entity_1 = require("../events/entities/event.entity");
const vendor_entity_1 = require("../vendors/entities/vendor.entity");
let ExpensesService = class ExpensesService {
    expenseRepository;
    eventRepository;
    vendorRepository;
    constructor(expenseRepository, eventRepository, vendorRepository) {
        this.expenseRepository = expenseRepository;
        this.eventRepository = eventRepository;
        this.vendorRepository = vendorRepository;
    }
    async create(eventId, createExpenseDto) {
        const event = await this.eventRepository.findOne({ where: { id: eventId } });
        if (!event) {
            throw new common_1.NotFoundException(`Event with id ${eventId} not found`);
        }
        let vendor = null;
        if (createExpenseDto.vendorId) {
            vendor = await this.vendorRepository.findOne({ where: { id: createExpenseDto.vendorId } });
            if (!vendor) {
                throw new common_1.NotFoundException(`Vendor with id ${createExpenseDto.vendorId} not found`);
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
    async findAllByEvent(eventId) {
        return this.expenseRepository.find({ where: { event: { id: eventId } } });
    }
    async findOne(id) {
        const expense = await this.expenseRepository.findOne({ where: { id } });
        if (!expense) {
            throw new common_1.NotFoundException(`Expense with id ${id} not found`);
        }
        return expense;
    }
    async update(id, updateExpenseDto) {
        const expense = await this.findOne(id);
        Object.assign(expense, updateExpenseDto);
        return this.expenseRepository.save(expense);
    }
    async remove(id) {
        const expense = await this.findOne(id);
        return this.expenseRepository.remove(expense);
    }
};
exports.ExpensesService = ExpensesService;
exports.ExpensesService = ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_entity_1.Expense)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __param(2, (0, typeorm_1.InjectRepository)(vendor_entity_1.Vendor)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], ExpensesService);
//# sourceMappingURL=expenses.service.js.map