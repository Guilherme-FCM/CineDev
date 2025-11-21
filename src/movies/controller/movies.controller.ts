import { Controller, Get } from '@nestjs/common';
import { MoviesService } from '../service/movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private service: MoviesService) {}

  @Get()
  async findAll() {
    return await this.service.findAll();
  }
}
