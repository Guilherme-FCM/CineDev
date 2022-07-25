/* eslint-disable prettier/prettier */
import "reflect-metadata";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'docker',
  password: 'root',
  database: 'cine-dev',
  synchronize: true,
  migrations: ['src/database/migrations/*.ts'],
  entities: ['src/**/*.entity.ts']
});
