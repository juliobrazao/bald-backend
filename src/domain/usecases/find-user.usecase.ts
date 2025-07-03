import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';
import { FindUserParams } from '@/domain/shared/find-user.params';

@Injectable()
export class FindUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository<
      UserEntity,
      FindUserParams
    >,
  ) {}

  async execute(params: FindUserParams): Promise<UserEntity[]> {
    return this.userRepository.find(params);
  }
}
