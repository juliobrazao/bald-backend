import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '@/presentation/dtos/create-user.request.dto';
import { CreateUserResponseDTO } from '@/presentation/dtos/create-user.response.dto';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { ReadUsersResponseDTO } from '@/presentation/dtos/read-users.response.dto';
import { FindUserRequestDTO } from '@/presentation/dtos/find-user.request.dto';
import { FindUserResponseDTO } from '@/presentation/dtos/find-user.response.dto';
import { FindUserUseCase } from '@/domain/usecases/find-user.usecase';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly readUsersUseCase: ReadUsersUseCase,
    private readonly findUserUseCase: FindUserUseCase,
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

  @Get()
  async find(
    @Query() params: FindUserRequestDTO,
  ): Promise<FindUserResponseDTO[]> {
    try {
      return await this.findUserUseCase.execute(params);
    } catch (err) {
      return err;
    }
  }
}
