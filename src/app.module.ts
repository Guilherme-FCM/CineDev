import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { MoviesModule } from './movies/movies.module';
import { AppDataSource } from './database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(), MoviesModule],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    this.dataSource = AppDataSource;
  }
}
