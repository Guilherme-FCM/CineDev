import { Movie } from './movies.entity';

export interface MoviesRepository {
  list(): Promise<Movie[]>;
  firstByName(name: string): Promise<Movie | null>;
  create(movie: Movie): Promise<Movie>;
  update(id: string, movie: Partial<Movie>): Promise<Movie>;
}
