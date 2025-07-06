import { IUserRepository } from './abstract-user.repository';

class UserRepositoryMock extends IUserRepository<string, any> {
  create = jest.fn(async (params) => 'created');
  read = jest.fn(async () => ['user1', 'user2']);
  find = jest.fn(async (params) => ['user1']);
  update = jest.fn(async (id, params) => 'updated');
  delete = jest.fn(async (id) => 'deleted');
}

describe('IUserRepository abstract class', () => {
  let repo: UserRepositoryMock;

  beforeEach(() => {
    repo = new UserRepositoryMock();
  });

  it('should call create with correct params', async () => {
    const result = await repo.create({ name: 'test' });
    expect(repo.create).toHaveBeenCalledWith({ name: 'test' });
    expect(result).toBe('created');
  });

  it('should call read and return users', async () => {
    const users = await repo.read();
    expect(repo.read).toHaveBeenCalled();
    expect(users).toEqual(['user1', 'user2']);
  });

  it('should call find with params', async () => {
    const users = await repo.find({ id: '123' });
    expect(repo.find).toHaveBeenCalledWith({ id: '123' });
    expect(users).toEqual(['user1']);
  });

  it('should call update with id and params', async () => {
    const result = await repo.update('123', { name: 'newName' });
    expect(repo.update).toHaveBeenCalledWith('123', { name: 'newName' });
    expect(result).toBe('updated');
  });

  it('should call delete with id', async () => {
    const result = await repo.delete('123');
    expect(repo.delete).toHaveBeenCalledWith('123');
    expect(result).toBe('deleted');
  });
});
