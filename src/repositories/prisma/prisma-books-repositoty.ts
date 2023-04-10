import { randomUUID } from 'crypto';
import { BooksRepository } from '../books-repository';
import { PrismaService } from 'src/database/prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaBooksRepository implements BooksRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    title: string,
    author: string,
    genre: string,
    edition: number,
  ): Promise<void> {
    await this.prisma.book.create({
      data: {
        id: randomUUID(),
        title,
        author,
        genre,
        edition,
      },
    });
  }

  async get(
    title: string,
    author: string,
    genre: string,
    edition: number,
  ): Promise<Book[]> {
    const books = await this.prisma.book.findMany();
    return books;
  }
}
