import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { ServiceInterface } from './movies.service.interface';

@Injectable()
export class MockService implements ServiceInterface {
  findAll(): Promise<Movie[]> {
    throw new Error('Method not implemented.');
  }

  create(movie: Movie): Promise<Movie> {
    throw new Error('Method not implemented.');
  }
}
