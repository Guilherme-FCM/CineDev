import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MoviesModule } from './movies/movies.module';
import { AppDataSource } from './database/data-source';

AppDataSource.initialize();

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), MoviesModule],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    this.dataSource = AppDataSource;
  }
}
