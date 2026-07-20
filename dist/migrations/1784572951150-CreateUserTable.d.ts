import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateUserTable1784572951150 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
