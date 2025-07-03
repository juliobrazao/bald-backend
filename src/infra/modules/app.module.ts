import { Module } from '@nestjs/common';
import { AppController } from '@/presentation/controllers/app.controller';
import { AppService } from '@/infra/providers/app.service';
import { UserModule } from './user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
