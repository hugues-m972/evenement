"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEventTable1784575175855 = void 0;
class CreateEventTable1784575175855 {
    name = 'CreateEventTable1784575175855';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TYPE "public"."event_type_enum" AS ENUM('PRIVATE', 'PUBLIC')`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" text, "type" "public"."event_type_enum" NOT NULL, "category" character varying, "location" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "capacity" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" uuid, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e4abcb418e46db776e920a05a16" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e4abcb418e46db776e920a05a16"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TYPE "public"."event_type_enum"`);
    }
}
exports.CreateEventTable1784575175855 = CreateEventTable1784575175855;
//# sourceMappingURL=1784575175855-CreateEventTable.js.map