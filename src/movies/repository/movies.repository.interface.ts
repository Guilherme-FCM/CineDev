import { Movie } from '../movies.entity';

export interface MoviesRepository {
  list(): Promise<Movie[]>;
  findById(id: string): Promise<Movie | null>;
  firstByName(name: string): Promise<Movie | null>;
  create(movie: Movie): Promise<Movie>;
  update(id: string, movie: Partial<Movie>): Promise<Movie>;
  delete(id: string): Promise<boolean>;
}
