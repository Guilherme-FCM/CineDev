import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from '../movies.entity';
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

  async findById(id: string): Promise<Movie | null> {
    return await this.repository.findOne({ where: { id } });
  }

  async firstByName(name: string): Promise<Movie | null> {
    return await this.repository.findOne({ where: { name } });
  }

  async create(movie: Movie): Promise<Movie> {
    return await this.repository.save(movie);
  }

  async update(id: string, movie: Partial<Movie>): Promise<Movie> {
    return await this.repository.save({ ...movie, id });
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected > 0;
  }
}
