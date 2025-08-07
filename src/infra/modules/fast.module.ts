import { FastController } from '@/presentation/controllers/fast.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [FastController],
})
export class FastModule {}
