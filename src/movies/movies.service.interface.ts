import { Movie } from './movies.entity';

export interface ServiceInterface {
  findAll(): Promise<Movie[]>;
}
