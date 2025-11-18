import { Inject, Injectable } from '@nestjs/common';
import { ServiceInterface } from './movies.service.interface';
import { MoviesRepository } from './movies.repository.interface';
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
}
