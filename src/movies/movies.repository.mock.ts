import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository.interface';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesMockRepository implements MoviesRepository {
  public data: Movie[] = [];

  list(): Promise<Movie[]> {
    return Promise.resolve(this.data);
  }
}
