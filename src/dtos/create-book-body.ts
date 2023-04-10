import { IsNotEmpty } from 'class-validator';

export class CreateBookBody {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  author: string;
  genre: string;
  edition: number;
}
