import { Injectable } from '@nestjs/common';
import { DeleteUserParams } from '@/domain/shared/delete-user.params';
import { UserEntity } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository<
      UserEntity,
      DeleteUserParams
    >,
  ) {}

  async execute(params: DeleteUserParams): Promise<UserEntity> {
    return await this.userRepository.delete(params);
  }
}
