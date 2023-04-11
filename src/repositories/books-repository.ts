import { Book } from 'src/interfaces/Book.interface';

export abstract class BooksRepository {
  abstract books: Book[];
  abstract create(
    title: string,
    author: string,
    genre: string,
    edition: number,
  ): Promise<void>;
  abstract get(
    title: string,
    author: string,
    genre: string,
    edition: number,
  ): Promise<Book[]>;
}
