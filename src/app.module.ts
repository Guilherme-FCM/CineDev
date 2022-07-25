import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { AppController } from './app.controller';
import { MoviesModule } from './movies/movies.module';
import { AppDataSource } from './database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(), MoviesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {
  constructor(private dataSource: DataSource) {
    this.dataSource = AppDataSource;
  }
}
