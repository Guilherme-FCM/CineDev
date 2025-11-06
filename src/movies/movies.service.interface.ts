import { Movie } from './movies.entity';

export interface ServiceInterface {
  findAll(): Promise<Movie[]>;

  findOne(id: string): Promise<Movie | null>;

  create(movieData: Movie): Promise<Movie | Error>;

  destroy(id: string): Promise<void>;

  update(id: string, data: Movie): Promise<void>;
}
