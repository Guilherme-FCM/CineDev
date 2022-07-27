import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { AppDataSource } from 'src/database/data-source';
import { Movie } from './movies.entity.ts';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private repository: Repository<Movie>,
  ) {}

  async findAll() {
    return await this.repository.find();
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

  async update() {
    //
  }
}
