import { UpdateUserUseCase } from './update-user.usecase';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';
import { UpdateUserParams } from '@/domain/shared/update-user.params';

describe('UpdateUserUseCase', () => {
  let useCase: UpdateUserUseCase;
  let userRepository: jest.Mocked<
    IUserRepository<UserEntity, UpdateUserParams>
  >;

  beforeEach(() => {
    userRepository = {
      create: jest.fn(),
      read: jest.fn(),
      find: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    useCase = new UpdateUserUseCase(userRepository);
  });

  it('should update a user by id via repository', async () => {
    const id = '123';
    const params: UpdateUserParams = {
      name: 'New Name',
      email: 'new@example.com',
    };
    const updatedUser = new UserEntity({
      id,
      name: params.name,
      email: params.email,
      password: 'secret',
      createdAt: Date.now(),
    });

    userRepository.update.mockResolvedValue(updatedUser);

    const result = await useCase.execute(id, params);

    expect(userRepository.update).toHaveBeenCalledWith(id, params);
    expect(result).toBe(updatedUser);
  });
});
