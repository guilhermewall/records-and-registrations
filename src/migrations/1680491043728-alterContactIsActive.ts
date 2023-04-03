import { MigrationInterface, QueryRunner } from "typeorm";

export class alterContactIsActive1680491043728 implements MigrationInterface {
    name = 'alterContactIsActive1680491043728'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" ADD "isActive" boolean NOT NULL DEFAULT true`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP COLUMN "isActive"`);
    }

}
