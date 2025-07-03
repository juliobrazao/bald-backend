import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';
import { CreateUserParams } from '@/domain/shared/create-user.params';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository<
      UserEntity,
      CreateUserParams
    >,
  ) {}

  async execute(params: CreateUserParams): Promise<UserEntity> {
    return await this.userRepository.create(params);
  }
}
