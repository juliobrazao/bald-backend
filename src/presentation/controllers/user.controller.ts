import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { Controller, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(params: any): Promise<any> {
    try {
      return await this.createUserUseCase.execute(params);
    } catch (err) {
      return err;
    }
  }
}
