import { ReadUsersUseCase } from './read-users.usecase';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';

describe('ReadUsersUseCase', () => {
  let useCase: ReadUsersUseCase;
  let userRepository: jest.Mocked<IUserRepository<UserEntity, unknown>>;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      read: jest.fn(),
      find: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    useCase = new ReadUsersUseCase(userRepository);
  });

  it('should read all users via repository', async () => {
    const users = [
      new UserEntity({
        id: '1',
        name: 'Alice',
        email: 'alice@example.com',
        password: 'pass',
        createdAt: Date.now(),
      }),
      new UserEntity({
        id: '2',
        name: 'Bob',
        email: 'bob@example.com',
        password: 'pass',
        createdAt: Date.now(),
      }),
    ];

    userRepository.read.mockResolvedValue(users);

    const result = await useCase.execute();

    expect(userRepository.read).toHaveBeenCalled();
    expect(result).toBe(users);
  });
});
