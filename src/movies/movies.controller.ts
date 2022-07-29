import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async findAll() {
    return await this.moviesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const movie = await this.moviesService.findOne(id);

    if (!movie) return { error: 'Movie not found.' };
    return movie;
  }

  @Post()
  async create(@Req() request: Request) {
    const { name, genre, classification, resume } = request.body;

    if (!genre || !classification)
      return { error: 'Genre and classification are required.' };

    const result = await this.moviesService.create({
      name,
      genre,
      classification,
      resume,
    });

    if (result instanceof Error) {
      return { error: result.message };
    }
    return result;
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return await this.moviesService.destroy(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Req() request: Request) {
    const { name, genre, classification, resume } = request.body;

    return await this.moviesService.update(id, {
      name,
      genre,
      classification,
      resume,
    });
  }
}
