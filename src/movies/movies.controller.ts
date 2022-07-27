import { Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Request } from 'express';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  async findAll() {
    const movies = await this.moviesService.findAll();
    return movies;
  }

  @Post()
  async create(@Req() request: Request) {
    const { name, genre, classification, resume } = request.body;

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
