import { DeleteUserUseCase } from './delete-user.usecase';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';

describe('DeleteUserUseCase', () => {
  let useCase: DeleteUserUseCase;
  let userRepository: jest.Mocked<IUserRepository<UserEntity, string>>;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      read: jest.fn(),
      find: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    useCase = new DeleteUserUseCase(userRepository);
  });

  it('should delete a user by id via repository', async () => {
    const userId = '123';
    const deletedUser = new UserEntity({
      id: userId,
      name: 'John Doe',
      email: 'john@example.com',
      password: 'secret',
      createdAt: Date.now(),
    });

    userRepository.delete.mockResolvedValue(deletedUser);

    const result = await useCase.execute(userId);

    expect(userRepository.delete).toHaveBeenCalledWith(userId);
    expect(result).toBe(deletedUser);
  });
});
