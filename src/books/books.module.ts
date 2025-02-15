import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { BookMiddleware } from './book.moddleware';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './entities/book.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule implements NestModule {
  constructor(private readonly configService: ConfigService) {
    console.log(configService.get<number>('PORT'));
    console.log(configService.get<boolean>('isLogging'));
  }
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(BookMiddleware).forRoutes('Books');
  }
}
