import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserRequestDTO } from '@/presentation/dtos/create-user.request.dto';
import { CreateUserResponseDTO } from '@/presentation/dtos/create-user.response.dto';

@Controller('users')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async create(
    @Body() params: CreateUserRequestDTO,
  ): Promise<CreateUserResponseDTO> {
    try {
      return await this.createUserUseCase.execute(params);
    } catch (err) {
      return err;
    }
  }
}
