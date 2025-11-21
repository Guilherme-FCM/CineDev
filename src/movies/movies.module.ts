import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { MoviesController } from './controller/movies.controller';
import { MoviesService } from './service/movies.service';
import { Movie } from './movies.entity';
import { MoviesOrmRepository } from './repository/movies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [
    MoviesService,
    { provide: 'MoviesRepository', useClass: MoviesOrmRepository },
  ],
  exports: [TypeOrmModule],
})
export class MoviesModule {}
