export abstract class BooksRepository {
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
