import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from './movies.entity';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  async findAll() {
    return await this.repository.find();
  }

  async findOne(id: string) {
    return await this.repository.findOne({ where: { id } });
  }

  async create(movieData: Movie): Promise<Movie | Error> {
    if (await this.repository.findOneBy({ name: movieData.name }))
      return Error('A movie with this name alredy exists.');

    const movie = this.repository.create(movieData);
    return await this.repository.save(movie);
  }

  async destroy(id: string) {
    return await this.repository.delete(id);
  }

  async update(id: string, data) {
    return await this.repository.update(id, data);
  }
}
