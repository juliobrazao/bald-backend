import { UserEntity } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { CreateUserParams } from '@/domain/shared/create-user.params';

type UserParams = CreateUserParams;

export class UserService implements IUserRepository<UserEntity, UserParams> {
  users: UserEntity[] = [];

  async create(params: CreateUserParams): Promise<UserEntity> {
    const newUser = new UserEntity({ ...params, createdAt: +new Date() });
    this.users.push(newUser);
    return newUser;
  }

  async read(): Promise<UserEntity[]> {
    return this.users;
  }
}
