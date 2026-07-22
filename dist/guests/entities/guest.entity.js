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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guest = exports.RsvpStatus = void 0;
const typeorm_1 = require("typeorm");
const event_entity_1 = require("../../events/entities/event.entity");
var RsvpStatus;
(function (RsvpStatus) {
    RsvpStatus["PENDING"] = "PENDING";
    RsvpStatus["YES"] = "YES";
    RsvpStatus["NO"] = "NO";
    RsvpStatus["MAYBE"] = "MAYBE";
})(RsvpStatus || (exports.RsvpStatus = RsvpStatus = {}));
let Guest = class Guest {
    id;
    event;
    fullName;
    phone;
    email;
    plusOnes;
    rsvpStatus;
    rsvpToken;
    notes;
    tokenExpiresAt;
    respondedAt;
    createdAt;
};
exports.Guest = Guest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Guest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => event_entity_1.Event),
    __metadata("design:type", event_entity_1.Event)
], Guest.prototype, "event", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Guest.prototype, "fullName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Guest.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Guest.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], Guest.prototype, "plusOnes", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: RsvpStatus, default: RsvpStatus.PENDING }),
    __metadata("design:type", String)
], Guest.prototype, "rsvpStatus", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], Guest.prototype, "rsvpToken", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Guest.prototype, "notes", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Guest.prototype, "tokenExpiresAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Guest.prototype, "respondedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Guest.prototype, "createdAt", void 0);
exports.Guest = Guest = __decorate([
    (0, typeorm_1.Entity)()
], Guest);
//# sourceMappingURL=guest.entity.js.map