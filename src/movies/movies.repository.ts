import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './movies.entity';
import { Repository } from 'typeorm';
import { MoviesRepository } from './movies.repository.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesOrmRepository implements MoviesRepository {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  async list(): Promise<Movie[]> {
    return await this.repository.find();
  }
}
