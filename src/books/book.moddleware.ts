import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class BookMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request book middleware...');
    // You can add any custom logic here
    // For example, you can log the request or check for authentication
    next();
  }
}
