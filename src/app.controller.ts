import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreateBookBody } from './dtos/create-book-body';
import { GetBookBody } from './dtos/get-book-body';
import { BooksRepository } from './repositories/books-repository';

@Controller()
export class AppController {
  constructor(private bookRepository: BooksRepository) {}

  @Post('book')
  async postBook(@Body() body: CreateBookBody) {
    const { title, author, genre, edition } = body;

    await this.bookRepository.create(title, author, genre, edition);
  }

  @Get('book')
  async getAllBooks(@Body() body: GetBookBody) {
    const { title, author, genre, edition } = body;
    await this.bookRepository.get(title, author, genre, edition);
  }
}
