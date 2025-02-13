import { Module } from '@nestjs/common';
import { UsersModule } from './users.module';
import { OrdersModule } from './orders.module';
import { ChatModule } from './chat.module';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, OrdersModule, ChatModule, BooksModule],
  controllers: [BookController],
  providers: [BookService],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
