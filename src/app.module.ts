import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { BooksRepository } from './repositories/books-repository';
import { PrismaBooksRepository } from './repositories/prisma/prisma-books-repositoty';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService,
    {
      provide: BooksRepository,
      useClass: PrismaBooksRepository,
    },
  ],
})
export class AppModule {}
