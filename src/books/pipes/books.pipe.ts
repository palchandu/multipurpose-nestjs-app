import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateBookDto } from '../dto/create-book.dto';
import { validate } from 'class-validator';

export class BooksPipe implements PipeTransform {
  async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const bookClass = plainToInstance(CreateBookDto, value);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const error = await validate(bookClass);
    console.log('eerrr', error);
    if (error && error.length > 0) {
      throw new BadRequestException({
        objectOrError: 'Validation failed: ' + JSON.stringify(error),
      });
    }
    console.log('Book Pipe', value, typeof value);
    console.log('Meta data', metadata);
    return value;
  }
}
