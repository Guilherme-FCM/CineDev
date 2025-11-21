import { Injectable } from '@nestjs/common';
import { MoviesRepository } from './movies.repository.interface';
import { Movie } from '../movies.entity';

@Injectable()
export class MoviesMockRepository implements MoviesRepository {
  public data: Movie[] = [];

  fake(movie: Partial<Movie> = {}): Movie {
    return {
      id: movie.id || '1',
      name: movie.name || 'Test',
      classification: movie.classification || 10,
      genre: movie.genre || 'fiction',
      resume: movie.resume || 'Test movie resume',
    };
  }

  list(): Promise<Movie[]> {
    return Promise.resolve(this.data);
  }

  findById(id: string): Promise<Movie | null> {
    const movie = this.data.find((m) => m.id === id);
    return Promise.resolve(movie);
  }

  firstByName(name: string): Promise<Movie | null> {
    const movie = this.data.find((m) => m.name === name);
    return Promise.resolve(movie);
  }

  create(movie: Movie): Promise<Movie> {
    this.data.push(movie);
    return Promise.resolve(movie);
  }

  update(id: string, movie: Partial<Movie>): Promise<Movie> {
    const index = this.data.findIndex((m) => m.id === id);
    this.data[index] = { ...this.data[index], ...movie };

    return Promise.resolve(this.data[index]);
  }

  delete(id: string): Promise<boolean> {
    const movie = this.data.find((m) => m.id === id);
    if (!movie) return Promise.resolve(false);

    this.data = this.data.filter((m) => m.id !== id);
    return Promise.resolve(true);
  }
}
