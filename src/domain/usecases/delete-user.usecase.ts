import { Injectable } from '@nestjs/common';
import { UserEntity } from '@/domain/entities/user.entity';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';

@Injectable()
export class DeleteUserUseCase {
  constructor(
    private readonly userRepository: IUserRepository<UserEntity, string>,
  ) {}

  async execute(id: string): Promise<UserEntity> {
    return await this.userRepository.delete(id);
  }
}
