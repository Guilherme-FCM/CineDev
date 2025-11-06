/* eslint-disable prettier/prettier */
import { Movie } from '../movies/movies.entity';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'database',
  port: 5432,
  username: 'docker',
  password: 'root',
  database: 'cine-dev',
  migrations: [__dirname + '/migrations/*.ts'],
  entities: [Movie]
});
