import { MoviesDTO } from './dtos/movies.dto';
import { Movie } from './movies.entity';

export interface ServiceInterface {
  findAll(): Promise<Movie[]>;
  findOne(id: string): Promise<Movie>;
  create(movie: MoviesDTO): Promise<Movie>;
  update(id: string, movie: { resume: string }): Promise<Movie>;
}
