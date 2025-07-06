import { NotFoundException } from '@nestjs/common';
import { UserEntity } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { CreateUserParams } from '@/domain/shared/create-user.params';
import { FindUserParams } from '@/domain/shared/find-user.params';
import { UpdateUserParams } from '@/domain/shared/update-user.params';

type UserParams = CreateUserParams | FindUserParams | UpdateUserParams;

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

  async update(id: string, params: UpdateUserParams): Promise<UserEntity> {
    const { name, email, password } = params;
    const userFound = this.users.filter((user: UserEntity) => user.id === id);

    if (!userFound) {
      throw new NotFoundException('User not found!');
    }

    if (name) {
      userFound[0].name = name;
    }

    if (email) {
      userFound[0].email = email;
    }

    if (password) {
      userFound[0].password = password;
    }

    const usersListWithoutUpdatedUser = this.users.filter(
      (user: UserEntity) => user.id !== id,
    );

    this.users = [...usersListWithoutUpdatedUser, userFound[0]];

    return userFound[0];
  }

  async delete(id: string): Promise<UserEntity> {
    const userFound = this.users.filter((user: UserEntity) => user.id === id);

    if (!userFound) {
      throw new NotFoundException('User not found!');
    }

    const usersListWithoutUpdatedUser = this.users.filter(
      (user: UserEntity) => user.id !== id,
    );

    this.users = [...usersListWithoutUpdatedUser];

    return userFound[0];
  }
}
