"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialSchema1784580753424 = void 0;
class InitialSchema1784580753424 {
    name = 'InitialSchema1784580753424';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."event_type_enum" AS ENUM('PRIVATE', 'PUBLIC')`);
        await queryRunner.query(`CREATE TABLE "event" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" text, "type" "public"."event_type_enum" NOT NULL, "category" character varying, "location" character varying NOT NULL, "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP, "capacity" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "ownerId" uuid, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."vendor_status_enum" AS ENUM('CONTACTED', 'CONFIRMED', 'CANCELLED')`);
        await queryRunner.query(`CREATE TABLE "vendor" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "service" character varying NOT NULL, "phone" character varying, "email" character varying, "agreedAmount" numeric(10,2) NOT NULL, "status" "public"."vendor_status_enum" NOT NULL DEFAULT 'CONTACTED', "notes" text, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "expense" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "label" character varying NOT NULL, "amount" numeric(10,2) NOT NULL, "date" date NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, "vendorId" uuid, "createdById" uuid, CONSTRAINT "PK_edd925b450e13ea36197c9590fc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."guest_rsvpstatus_enum" AS ENUM('PENDING', 'YES', 'NO', 'MAYBE')`);
        await queryRunner.query(`CREATE TABLE "guest" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "phone" character varying, "email" character varying, "plusOnes" integer NOT NULL DEFAULT '0', "rsvpStatus" "public"."guest_rsvpstatus_enum" NOT NULL DEFAULT 'PENDING', "rsvpToken" character varying NOT NULL, "notes" character varying, "tokenExpiresAt" TIMESTAMP, "respondedAt" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "UQ_8d7449a2ad157bde16fc1f55ce9" UNIQUE ("rsvpToken"), CONSTRAINT "PK_57689d19445de01737dbc458857" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "registration" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying NOT NULL, "phone" character varying NOT NULL, "email" character varying, "qrCode" character varying NOT NULL, "checkedIn" boolean NOT NULL DEFAULT false, "checkedInAt" TIMESTAMP, "registeredAt" TIMESTAMP NOT NULL DEFAULT now(), "eventId" uuid, CONSTRAINT "UQ_37ee50df068663ec221ad71854c" UNIQUE ("qrCode"), CONSTRAINT "UQ_853461c0f4d4de964aed220ce2f" UNIQUE ("eventId", "phone"), CONSTRAINT "PK_cb23dc9d28df8801b15e9e2b8d6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "event" ADD CONSTRAINT "FK_e4abcb418e46db776e920a05a16" FOREIGN KEY ("ownerId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "vendor" ADD CONSTRAINT "FK_f491caee6252382941adde61b34" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_0859baec705a912dff653c97cef" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_eacb116ab0521ad9b96f2bb53ba" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "expense" ADD CONSTRAINT "FK_33025f4898ea79cc35a3c6da4ca" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "guest" ADD CONSTRAINT "FK_7e01a24a7b7053c0e8e6c9dadee" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "registration" ADD CONSTRAINT "FK_c9cbfae000488578b2bb322c8bd" FOREIGN KEY ("eventId") REFERENCES "event"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "registration" DROP CONSTRAINT "FK_c9cbfae000488578b2bb322c8bd"`);
        await queryRunner.query(`ALTER TABLE "guest" DROP CONSTRAINT "FK_7e01a24a7b7053c0e8e6c9dadee"`);
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_33025f4898ea79cc35a3c6da4ca"`);
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_eacb116ab0521ad9b96f2bb53ba"`);
        await queryRunner.query(`ALTER TABLE "expense" DROP CONSTRAINT "FK_0859baec705a912dff653c97cef"`);
        await queryRunner.query(`ALTER TABLE "vendor" DROP CONSTRAINT "FK_f491caee6252382941adde61b34"`);
        await queryRunner.query(`ALTER TABLE "event" DROP CONSTRAINT "FK_e4abcb418e46db776e920a05a16"`);
        await queryRunner.query(`DROP TABLE "registration"`);
        await queryRunner.query(`DROP TABLE "guest"`);
        await queryRunner.query(`DROP TYPE "public"."guest_rsvpstatus_enum"`);
        await queryRunner.query(`DROP TABLE "expense"`);
        await queryRunner.query(`DROP TABLE "vendor"`);
        await queryRunner.query(`DROP TYPE "public"."vendor_status_enum"`);
        await queryRunner.query(`DROP TABLE "event"`);
        await queryRunner.query(`DROP TYPE "public"."event_type_enum"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.InitialSchema1784580753424 = InitialSchema1784580753424;
//# sourceMappingURL=1784580753424-InitialSchema.js.map