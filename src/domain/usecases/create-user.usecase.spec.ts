import { CreateUserUseCase } from './create-user.usecase';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';
import { CreateUserParams } from '@/domain/shared/create-user.params';

describe('CreateUserUseCase', () => {
  let useCase: CreateUserUseCase;
  let userRepository: jest.Mocked<
    IUserRepository<UserEntity, CreateUserParams>
  >;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      read: jest.fn(),
      find: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    useCase = new CreateUserUseCase(userRepository);
  });

  it('should create a user via repository', async () => {
    const params: CreateUserParams = {
      id: '1',
      name: 'John',
      email: 'john@example.com',
      password: 'pass',
    };

    const createdUser = new UserEntity(params);

    userRepository.create.mockResolvedValue(createdUser);

    const result = await useCase.execute(params);

    expect(userRepository.create).toHaveBeenCalledWith(params);
    expect(result).toBe(createdUser);
  });
});
