import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { Module } from '@nestjs/common';
import { UserService } from '@/infra/providers/user.service';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { UserController } from '@/presentation/controllers/user.controller';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { FindUserUseCase } from '@/domain/usecases/find-user.usecase';

@Module({
  providers: [
    {
      provide: IUserRepository,
      useClass: UserService,
    },
    CreateUserUseCase,
    ReadUsersUseCase,
    FindUserUseCase,
  ],
  controllers: [UserController],
  exports: [IUserRepository],
})
export class UserModule {}
