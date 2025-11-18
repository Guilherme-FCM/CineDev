import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository.interface';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesMockRepository implements MoviesRepository {
  public data: Movie[] = [];

  fake(): Movie {
    return {
      id: '1',
      name: 'Test',
      classification: 10,
      genre: 'fiction',
      resume: 'test',
    };
  }

  list(): Promise<Movie[]> {
    return Promise.resolve(this.data);
  }
}
