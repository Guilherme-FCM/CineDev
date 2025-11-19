import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MoviesMockRepository } from './movies.repository.mock';
import { MovieDTO } from './dtos/movie.dto';

describe('MoviesService', () => {
  let service: MoviesService;
  let repository: MoviesMockRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        { provide: 'MoviesRepository', useValue: new MoviesMockRepository() },
      ],
    }).compile();

    service = module.get(MoviesService);
    repository = module.get('MoviesRepository');
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // -------------------------
  // findAll
  // -------------------------
  it('should return an empty list of movies', async () => {
    const result = await service.findAll();

    expect(result).toEqual([]);
    expect(result.length).toBe(0);
  });

  it('should return a list of movies', async () => {
    repository.data = [repository.fake()];

    const result = await service.findAll();

    expect(result.length).toBe(repository.data.length);
  });

  it('should return only the necessary fields', async () => {
    repository.data = [repository.fake()];

    const result = await service.findAll();
    const keys = Object.keys(result[0]);

    expect(new Set(keys)).toEqual(
      new Set(['id', 'name', 'classification', 'genre']),
    );
  });

  // -------------------------
  // create
  // -------------------------
  it('should create a movie', async () => {
    const movie = repository.fake();

    const result = await service.create(movie as MovieDTO);
    const list = await repository.list();

    expect(list).toContain(result);
  });

  it('should not create a movie with a name alredy existent', async () => {
    const movie = repository.fake();
    repository.data.push(movie);

    const result = service.create(movie as MovieDTO);

    await expect(() => result).rejects.toThrow();
  });

  it('should not create a movie with a resume less than 10 caracters', async () => {
    const movie = repository.fake();
    movie.resume = '123456789'; // Phrase with 9 caracters

    const result = service.create(movie as MovieDTO);

    await expect(async () => result).rejects.toThrow();
  });
});
