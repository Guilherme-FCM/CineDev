import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MoviesMockRepository } from './movies.repository.mock';

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
});
