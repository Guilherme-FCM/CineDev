import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MoviesMockRepository } from './movies.repository.mock';

describe('MoviesService', () => {
  let service: MoviesService;
  const repository = new MoviesMockRepository();

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MoviesService,
        { provide: 'MoviesRepository', useValue: repository },
      ],
    }).compile();

    service = module.get(MoviesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // -------------------------
  // findAll
  // -------------------------
  it('deve retornar todos os filmes', async () => {
    repository.data = [
      { id: '1', name: 'Test', classification: 10, genre: 'fiction' },
    ];

    const result = await service.findAll();

    expect(result).toEqual(repository.data);
  });
});
