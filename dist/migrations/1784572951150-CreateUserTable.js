"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserTable1784572951150 = void 0;
class CreateUserTable1784572951150 {
    name = 'CreateUserTable1784572951150';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.CreateUserTable1784572951150 = CreateUserTable1784572951150;
//# sourceMappingURL=1784572951150-CreateUserTable.js.map