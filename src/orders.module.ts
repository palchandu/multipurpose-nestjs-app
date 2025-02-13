import { Module } from '@nestjs/common';
import { Feature1Module } from './feature1.module';
import { Feature2Module } from './feature2.module';

@Module({
  imports: [Feature1Module, Feature2Module],
  controllers: [],
  providers: [],
})
export class OrdersModule {
  constructor() {
    console.log('Orders Module');
  }
}
