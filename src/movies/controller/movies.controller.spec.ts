import { Test, TestingModule } from '@nestjs/testing';
import { MoviesController } from '../controller/movies.controller';
import { MockService } from '../service/movies.service.mock';
import { MoviesService } from '../service/movies.service';

describe('MoviesController', () => {
  let controller: MoviesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [{ provide: MoviesService, useClass: MockService }],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
