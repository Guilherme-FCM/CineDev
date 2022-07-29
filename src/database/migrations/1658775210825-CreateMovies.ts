import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovies1658775210825 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          { name: 'name', type: 'varchar' },
          { name: 'genre', type: 'varchar' },
          { name: 'classification', type: 'integer' },
          { name: 'resume', type: 'text', isNullable: true },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
