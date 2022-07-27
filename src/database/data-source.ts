/* eslint-disable prettier/prettier */
import { Movie } from 'src/movies/movies.entity.ts';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'docker',
  password: 'root',
  database: 'cine-dev',
  migrations: [__dirname + 'src/database/migrations/*.ts'],
  entities: [Movie]
});
