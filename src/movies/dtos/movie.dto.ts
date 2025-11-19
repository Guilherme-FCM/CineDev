import { Movie } from '../movies.entity';

export class MovieDTO {
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly classification: number;
  readonly resume?: string;

  public constructor(movie: Movie) {
    this.id = movie.id;
    this.name = movie.name;
    this.genre = movie.genre;
    this.classification = movie.classification;
    this.resume = movie.resume;
  }
}
