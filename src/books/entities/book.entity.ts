import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  author: string;

  @Prop()
  publisheddate: Date;

  @Prop({ required: true })
  isbn: string;

  @Prop()
  pages: number;

  @Prop()
  language: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
