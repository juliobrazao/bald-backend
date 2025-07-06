import { UserService } from './user.service';
import { NotFoundException } from '@nestjs/common';
import { UserEntity } from '@/domain/entities/user.entity';
import { CreateUserParams } from '@/domain/shared/create-user.params';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  const mockUser: CreateUserParams = {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    password: '123456',
  };

  it('should create a user', async () => {
    const user = await service.create(mockUser);

    expect(user).toBeInstanceOf(UserEntity);
    expect(user.id).toBe(mockUser.id);
    expect(user.name).toBe(mockUser.name);
    expect(user.email).toBe(mockUser.email);
    expect(user.password).toBe(mockUser.password);
    expect(typeof user.createdAt).toBe('number');
  });

  it('should return all users', async () => {
    await service.create(mockUser);
    const users = await service.read();

    expect(users).toHaveLength(1);
    expect(users[0].id).toBe(mockUser.id);
  });

  it('should find user by id', async () => {
    await service.create(mockUser);
    const result = await service.find({ id: '1' });

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe('1');
  });

  it('should throw if user not found on find()', async () => {
    await expect(service.find({ id: '999' })).rejects.toThrow(
      NotFoundException,
    );
  });

  it('should update an existing user', async () => {
    await service.create(mockUser);

    const updated = await service.update('1', {
      name: 'Jane Doe',
      email: 'jane@example.com',
    });

    expect(updated.name).toBe('Jane Doe');
    expect(updated.email).toBe('jane@example.com');
    expect(updated.password).toBe(mockUser.password);
  });

  it('should throw if user not found on update()', async () => {
    await expect(
      service.update('999', { name: 'Does Not Exist' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('should delete a user by id', async () => {
    await service.create(mockUser);

    const deleted = await service.delete('1');
    expect(deleted.id).toBe('1');

    const usersAfterDelete = await service.read();
    expect(usersAfterDelete).toHaveLength(0);
  });

  it('should throw if user not found on delete()', async () => {
    await expect(service.delete('999')).rejects.toThrow(NotFoundException);
  });
});
