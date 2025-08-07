import { Module } from '@nestjs/common';
import { UserModule } from './user.module';
import { FastModule } from './fast.module';

@Module({
  imports: [UserModule, FastModule],
})
export class AppModule {}
