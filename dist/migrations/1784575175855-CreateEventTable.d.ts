import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateEventTable1784575175855 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
