import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  Req,
  Res,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksExeption } from './books.exception';
import { BooksGuard } from './guard/books.guard';
import { BooksInterceptor } from './interceptor/books.interceptor';
import { Request, Response } from 'express';
//import { BooksPipe } from './pipes/books.pipe';

@Controller('books')
@UseGuards(BooksGuard)
@UseInterceptors(BooksInterceptor)
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  /** For custom pipe validation */
  // @Post()
  // create(@Body(new BooksPipe()) createBookDto: CreateBookDto) {
  //   return this.booksService.create(createBookDto);
  // }

  @Post()
  async create(
    @Req() req: Request,
    @Res() res: Response,
    @Body(new ValidationPipe()) createBookDto: CreateBookDto,
  ) {
    if (!createBookDto) {
      throw new BooksExeption();
    }
    // return res.json(req.body);
    const regRes = await this.booksService.create(createBookDto);
    //console.log('trrrrr', regRes);
    return res.json(regRes);
  }

  @Get()
  findAll() {
    // to test custom exception claas
    //throw new BooksExeption();
    //console.log('reqqq', req.body);

    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.booksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.booksService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.booksService.remove(+id);
  }
}
