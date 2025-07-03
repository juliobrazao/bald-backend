import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '@/presentation/dtos/create-user.request.dto';
import { CreateUserResponseDTO } from '@/presentation/dtos/create-user.response.dto';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { ReadUsersResponseDTO } from '@/presentation/dtos/read-users.response.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly readUsersUseCase: ReadUsersUseCase,
  ) {}

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

  @Get('all')
  async read(): Promise<ReadUsersResponseDTO[]> {
    try {
      return await this.readUsersUseCase.execute();
    } catch (err) {
      return err;
    }
  }
}
