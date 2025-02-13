import { HttpException, HttpStatus } from '@nestjs/common';

export class BooksExeption extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.BAD_REQUEST);
  }
}
