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

  firstByName(name: string): Promise<Movie | null> {
    const movie = this.data.find((m) => m.name === name);
    return Promise.resolve(movie);
  }

  create(movie: Movie): Promise<Movie> {
    this.data.push(movie);
    return Promise.resolve(movie);
  }
}
