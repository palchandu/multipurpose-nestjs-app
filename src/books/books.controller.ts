import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ValidationPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BooksExeption } from './books.exception';
//import { BooksPipe } from './pipes/books.pipe';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  /** For custom pipe validation */
  // @Post()
  // create(@Body(new BooksPipe()) createBookDto: CreateBookDto) {
  //   return this.booksService.create(createBookDto);
  // }

  @Post()
  create(@Body(new ValidationPipe()) createBookDto: CreateBookDto) {
    if (!createBookDto) {
      throw new BooksExeption();
    }
    return this.booksService.create(createBookDto);
  }

  @Get()
  findAll() {
    // to test custom exception claas
    //throw new BooksExeption();
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
