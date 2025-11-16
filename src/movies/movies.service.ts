import { Inject, Injectable } from '@nestjs/common';
import { ServiceInterface } from './movies.service.interface';
import { MoviesRepository } from './movies.repository.interface';

@Injectable()
export class MoviesService implements ServiceInterface {
  constructor(
    @Inject('MoviesRepository')
    private repository: MoviesRepository,
  ) {}

  async findAll() {
    return await this.repository.list();
  }
}
