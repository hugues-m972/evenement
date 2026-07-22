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
exports.RegistrationsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto_1 = require("crypto");
const registration_entity_1 = require("./entities/registration.entity");
const event_entity_1 = require("../events/entities/event.entity");
let RegistrationsService = class RegistrationsService {
    registrationRepository;
    eventRepository;
    constructor(registrationRepository, eventRepository) {
        this.registrationRepository = registrationRepository;
        this.eventRepository = eventRepository;
    }
    async create(eventId, createRegistrationDto) {
        const event = await this.eventRepository.findOne({ where: { id: eventId } });
        if (!event) {
            throw new common_1.NotFoundException(`Event with id ${eventId} not found`);
        }
        const existing = await this.registrationRepository.findOne({
            where: { event: { id: eventId }, phone: createRegistrationDto.phone },
        });
        if (existing) {
            throw new common_1.ConflictException('Ce numéro est déjà inscrit à cet événement');
        }
        const registration = this.registrationRepository.create({
            ...createRegistrationDto,
            event,
            qrCode: (0, crypto_1.randomBytes)(16).toString('hex'),
        });
        return this.registrationRepository.save(registration);
    }
    async findAllByEvent(eventId) {
        return this.registrationRepository.find({ where: { event: { id: eventId } } });
    }
    async findOne(id) {
        const registration = await this.registrationRepository.findOne({ where: { id } });
        if (!registration) {
            throw new common_1.NotFoundException(`Registration with id ${id} not found`);
        }
        return registration;
    }
    async update(id, updateRegistrationDto) {
        const registration = await this.findOne(id);
        Object.assign(registration, updateRegistrationDto);
        return this.registrationRepository.save(registration);
    }
    async remove(id) {
        const registration = await this.findOne(id);
        return this.registrationRepository.remove(registration);
    }
};
exports.RegistrationsService = RegistrationsService;
exports.RegistrationsService = RegistrationsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registration_entity_1.Registration)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], RegistrationsService);
//# sourceMappingURL=registrations.service.js.map