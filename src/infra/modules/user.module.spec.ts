import { Test, TestingModule } from '@nestjs/testing';
import { UserModule } from './user.module';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserService } from '@/infra/providers/user.service';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { FindUserUseCase } from '@/domain/usecases/find-user.usecase';
import { UpdateUserUseCase } from '@/domain/usecases/update-user.usecase';
import { DeleteUserUseCase } from '@/domain/usecases/delete-user.usecase';
import { UserController } from '@/presentation/controllers/user.controller';

describe('UserModule', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
  });

  it('should compile the module', () => {
    expect(module).toBeDefined();
  });

  it('should provide IUserRepository with UserService', () => {
    const userRepo = module.get<IUserRepository<any, any>>(IUserRepository);
    expect(userRepo).toBeInstanceOf(UserService);
  });

  it('should provide CreateUserUseCase', () => {
    const useCase = module.get<CreateUserUseCase>(CreateUserUseCase);
    expect(useCase).toBeDefined();
  });

  it('should provide ReadUsersUseCase', () => {
    const useCase = module.get<ReadUsersUseCase>(ReadUsersUseCase);
    expect(useCase).toBeDefined();
  });

  it('should provide FindUserUseCase', () => {
    const useCase = module.get<FindUserUseCase>(FindUserUseCase);
    expect(useCase).toBeDefined();
  });

  it('should provide UpdateUserUseCase', () => {
    const useCase = module.get<UpdateUserUseCase>(UpdateUserUseCase);
    expect(useCase).toBeDefined();
  });

  it('should provide DeleteUserUseCase', () => {
    const useCase = module.get<DeleteUserUseCase>(DeleteUserUseCase);
    expect(useCase).toBeDefined();
  });

  it('should instantiate UserController', () => {
    const controller = module.get<UserController>(UserController);
    expect(controller).toBeDefined();
  });
});
