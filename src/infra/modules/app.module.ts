import { Module } from '@nestjs/common';
import { AppController } from '@/presentation/controllers/app.controller';
import { AppService } from '@/infra/providers/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
