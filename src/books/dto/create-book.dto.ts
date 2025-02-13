import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  id: string;
  @IsString()
  name: string;
  @IsString()
  author: string;
}
