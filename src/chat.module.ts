import { Module } from '@nestjs/common';
import { Feature3Module } from './feature3.module';
import { MessageModule } from './message/message.module';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [Feature3Module, MessageModule, SmsModule],
  controllers: [],
  providers: [],
})
export class ChatModule {
  constructor() {
    console.log('Chat Module');
  }
}
