import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { ServiceInterface } from './movies.service.interface';

@Injectable()
export class MockService implements ServiceInterface {
  findAll(): Promise<Movie[]> {
    throw new Error('Method not implemented.');
  }

  findOne(id: string): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  create(movie: Movie): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  update(id: string, movie: { resume: string }): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
