import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { map, Observable } from 'rxjs';
export interface Response<T> {
  data: T;
}
@Injectable()
export class BooksInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    // const ctx = context.switchToHttp();
    // const request = ctx.getRequest<Request>();
    //request.body.title = 'Pal';
    // console.log('This is book interceptor', request.body);
    // return next.handle().pipe(
    //   map((data) => {
    //     //const newValue = 'updated value';
    //     // return { data, newValue };
    //     return data;
    //   }),
    // );
    return next.handle();
  }
}
