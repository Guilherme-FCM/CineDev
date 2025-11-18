import { Movie } from '../movies.entity';

export class MoviesDTO {
  readonly id: string;
  readonly name: string;
  readonly genre: string;
  readonly classification: number;

  public constructor(movie: Movie) {
    this.id = movie.id;
    this.name = movie.name;
    this.genre = movie.genre;
    this.classification = movie.classification;
  }

  public static to(movies: Movie[]): MoviesDTO[] {
    return movies.map((movie) => new this(movie));
  }
}
