import { Injectable } from '@nestjs/common';
import { Movie } from './movies.entity';
import { ServiceInterface } from './movies.service.interface';

@Injectable()
export class MockService implements ServiceInterface {
  findAll(): Promise<Movie[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Movie | null> {
    throw new Error('Method not implemented.');
  }
  create(movieData: Movie): Promise<Movie | Error> {
    throw new Error('Method not implemented.');
  }
  destroy(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Movie): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
