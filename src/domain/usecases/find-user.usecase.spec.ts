import { FindUserUseCase } from './find-user.usecase';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';
import { FindUserParams } from '@/domain/shared/find-user.params';

describe('FindUserUseCase', () => {
  let useCase: FindUserUseCase;
  let userRepository: jest.Mocked<IUserRepository<UserEntity, FindUserParams>>;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      read: jest.fn(),
      find: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    useCase = new FindUserUseCase(userRepository);
  });

  it('should find users via repository', async () => {
    const params: FindUserParams = { id: '123' };
    const foundUsers = [
      new UserEntity({
        id: '123',
        name: 'John',
        email: 'john@example.com',
        password: 'pass',
        createdAt: Date.now(),
      }),
    ];

    userRepository.find.mockResolvedValue(foundUsers);

    const result = await useCase.execute(params);

    expect(userRepository.find).toHaveBeenCalledWith(params);
    expect(result).toBe(foundUsers);
  });
});
