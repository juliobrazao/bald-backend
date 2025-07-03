import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UpdateUserParams } from '@/domain/shared/update-user.params';
import { UserEntity } from '@/domain/entities/user.entity';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository<
      UserEntity,
      UpdateUserParams
    >,
  ) {}

  async execute(id: string, params: UpdateUserParams): Promise<UserEntity> {
    return await this.userRepository.update(id, params);
  }
}
