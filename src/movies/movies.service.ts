import { Inject, Injectable } from '@nestjs/common';
import { ServiceInterface } from './movies.service.interface';
import { MoviesRepository } from './movies.repository.interface';
import { MovieDTO } from './dtos/movie.dto';
import { MoviesDTO } from './dtos/movies.dto';

@Injectable()
export class MoviesService implements ServiceInterface {
  public readonly ADULT_AGE = 18;
  public readonly ADULT_CLASSIFICATIONS = ['terror', 'hot'];

  constructor(
    @Inject('MoviesRepository')
    private repository: MoviesRepository,
  ) {}

  async findAll() {
    const movies = await this.repository.list();
    return MoviesDTO.to(movies);
  }

  async findOne(id: string) {
    const movie = await this.repository.findById(id);
    if (!movie) throw new Error('Movie not found');
    return movie;
  }

  async create(movie: MovieDTO) {
    if (movie.resume.length < 10)
      throw new Error('Resume must have at least 10 caracters');

    if (
      movie.classification < this.ADULT_AGE &&
      this.ADULT_CLASSIFICATIONS.includes(movie.genre.toLowerCase())
    )
      throw new Error(
        'Classification must be at least 18 to genre "terror" or "hot"',
      );

    const finded = await this.repository.firstByName(movie.name);
    if (finded) throw new Error('Movie name already exist');

    return await this.repository.create(movie);
  }

  async update(id: string, movie: { resume: string }) {
    return await this.repository.update(id, movie);
  }

  async delete(id: string): Promise<void> {
    const result = await this.repository.delete(id);

    if (!result) throw new Error('Movie not found');
  }
}
