import { MigrationInterface, QueryRunner } from "typeorm";

export class migrations1680490992154 implements MigrationInterface {
    name = 'migrations1680490992154'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
