import { Injectable } from '@nestjs/common';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserEntity } from '@/domain/entities/user.entity';

@Injectable()
export class ReadUsersUseCase {
  constructor(
    private readonly userRepository: IUserRepository<UserEntity, unknown>,
  ) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.read();
  }
}
