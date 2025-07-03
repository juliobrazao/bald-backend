import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '@/presentation/dtos/create-user.request.dto';
import { CreateUserResponseDTO } from '@/presentation/dtos/create-user.response.dto';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { ReadUsersResponseDTO } from '@/presentation/dtos/read-users.response.dto';
import { FindUserRequestDTO } from '@/presentation/dtos/find-user.request.dto';
import { FindUserResponseDTO } from '@/presentation/dtos/find-user.response.dto';
import { FindUserUseCase } from '@/domain/usecases/find-user.usecase';
import { UpdateUserUseCase } from '@/domain/usecases/update-user.usecase';
import { UpdateUserRequestDTO } from '../dtos/update-user.request.dto';
import { UpdateUserResponseDTO } from '../dtos/update-user.response.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly readUsersUseCase: ReadUsersUseCase,
    private readonly findUserUseCase: FindUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
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

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() params: UpdateUserRequestDTO,
  ): Promise<UpdateUserResponseDTO> {
    try {
      return this.updateUserUseCase.execute(id, params);
    } catch (err) {
      return err;
    }
  }
}
