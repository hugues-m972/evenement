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
exports.GuestsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const crypto_1 = require("crypto");
const guest_entity_1 = require("./entities/guest.entity");
const event_entity_1 = require("../events/entities/event.entity");
let GuestsService = class GuestsService {
    guestRepository;
    eventRepository;
    constructor(guestRepository, eventRepository) {
        this.guestRepository = guestRepository;
        this.eventRepository = eventRepository;
    }
    async create(eventId, createGuestDto) {
        const event = await this.eventRepository.findOne({ where: { id: eventId } });
        if (!event) {
            throw new common_1.NotFoundException(`Event with id ${eventId} not found`);
        }
        const guest = this.guestRepository.create({
            ...createGuestDto,
            event,
            rsvpToken: (0, crypto_1.randomBytes)(16).toString('hex'),
        });
        return this.guestRepository.save(guest);
    }
    async findAllByEvent(eventId) {
        return this.guestRepository.find({ where: { event: { id: eventId } } });
    }
    async findOne(id) {
        const guest = await this.guestRepository.findOne({ where: { id } });
        if (!guest) {
            throw new common_1.NotFoundException(`Guest with id ${id} not found`);
        }
        return guest;
    }
    async update(id, updateGuestDto) {
        const guest = await this.findOne(id);
        Object.assign(guest, updateGuestDto);
        return this.guestRepository.save(guest);
    }
    async remove(id) {
        const guest = await this.findOne(id);
        return this.guestRepository.remove(guest);
    }
};
exports.GuestsService = GuestsService;
exports.GuestsService = GuestsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(guest_entity_1.Guest)),
    __param(1, (0, typeorm_1.InjectRepository)(event_entity_1.Event)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], GuestsService);
//# sourceMappingURL=guests.service.js.map