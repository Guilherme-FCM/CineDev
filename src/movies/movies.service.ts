import { Inject, Injectable } from '@nestjs/common';
import { ServiceInterface } from './movies.service.interface';
import { MoviesRepository } from './movies.repository.interface';
import { MovieDTO } from './dtos/movie.dto';
import { MoviesDTO } from './dtos/movies.dto';

@Injectable()
export class MoviesService implements ServiceInterface {
  constructor(
    @Inject('MoviesRepository')
    private repository: MoviesRepository,
  ) {}

  async findAll() {
    const movies = await this.repository.list();
    return MoviesDTO.to(movies);
  }

  async create(movie: MovieDTO) {
    const finded = await this.repository.firstByName(movie.name);

    if (finded) throw new Error('Movie name already exist');

    return await this.repository.create(movie);
  }
}
