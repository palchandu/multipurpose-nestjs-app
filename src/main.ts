import { NestFactory } from '@nestjs/core';
import { RootModule } from './root.module';
import { NextFunction, Request, Response } from 'express';

/** Implementing global midddleware */
function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('Global Middleware');
  console.log(req.url);
  next();
}
function anotherGlobalMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log('Another Global Middleware');
  console.log(req.url);
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware);
  app.use(anotherGlobalMiddleware);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then((item) => {
    console.log('iii', item);
  })
  .catch((error) => {
    console.log('Error', error);
  });
