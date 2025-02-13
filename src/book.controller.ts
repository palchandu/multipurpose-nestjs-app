import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  // add book
  @Post('/add')
  addBook(@Req() req: Request, @Res() res: Response) {
    console.log(req.body);
    const addBookRes = this.bookService.addBook();
    res.status(200).send({ message: addBookRes });
  }
  @Get('/findAll')
  getBook(): string {
    const allBooks = this.bookService.findBooks();
    return allBooks;
  }
  // delete book
  @Delete('/delete')
  deleteBook(): string {
    const deleteBooks = this.bookService.findBooks();
    return deleteBooks;
  }
  // update book
  @Put('/update')
  updateBook(): string {
    const updateBooks = this.bookService.updateBook();
    return updateBooks;
  }
  // find all book
  @Delete('/delete')
  findAllBook(): string {
    const deleteBook = this.bookService.deleteBook();
    return deleteBook;
  }

  @Get('/findBookById/:id')
  findOne(@Res() res: Response, @Param('id') id: string) {
    res.status(200).send({ message: 'Book find successfully', id: id });
  }
}
