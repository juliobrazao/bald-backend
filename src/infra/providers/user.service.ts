import { UserEntity } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { CreateUserParams } from '@/domain/shared/create-user.params';
import { FindUserParams } from '@/domain/shared/find-user.params';
import { NotFoundException } from '@nestjs/common';

type UserParams = CreateUserParams | FindUserParams;

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

  async find({ id }: FindUserParams): Promise<UserEntity[]> {
    const userFound = this.users.filter((user: UserEntity) => user.id === id);

    if (!userFound) {
      throw new NotFoundException('User not found!');
    }

    return userFound;
  }
}
