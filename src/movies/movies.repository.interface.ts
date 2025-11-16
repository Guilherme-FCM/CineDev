import { Movie } from './movies.entity';

export interface MoviesRepository {
  list(): Promise<Movie[]>;
}
