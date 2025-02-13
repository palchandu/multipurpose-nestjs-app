import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  addBook(): string {
    return 'This will add books';
  }
  updateBook(): string {
    return 'This will update book';
  }
  deleteBook(): string {
    return 'This will return book';
  }
  findBooks(): string {
    return 'This will find all books';
  }
}
