import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { ReadUsersUseCase } from '@/domain/usecases/read-users.usecase';
import { FindUserUseCase } from '@/domain/usecases/find-user.usecase';
import { UpdateUserUseCase } from '@/domain/usecases/update-user.usecase';
import { DeleteUserUseCase } from '@/domain/usecases/delete-user.usecase';
import { CreateUserRequestDTO } from '../dtos/create-user.request.dto';

describe('UserController', () => {
  let controller: UserController;

  // Mocks
  const mockCreate = { execute: jest.fn() };
  const mockRead = { execute: jest.fn() };
  const mockFind = { execute: jest.fn() };
  const mockUpdate = { execute: jest.fn() };
  const mockDelete = { execute: jest.fn() };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        { provide: CreateUserUseCase, useValue: mockCreate },
        { provide: ReadUsersUseCase, useValue: mockRead },
        { provide: FindUserUseCase, useValue: mockFind },
        { provide: UpdateUserUseCase, useValue: mockUpdate },
        { provide: DeleteUserUseCase, useValue: mockDelete },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create a user', async () => {
    const dto = {
      id: '2',
      name: 'John',
      email: 'john@example.com',
      password: '123',
    };
    const response = { dto };
    mockCreate.execute.mockResolvedValue(response);

    const result = await controller.create(dto);
    expect(mockCreate.execute).toHaveBeenCalledWith(dto);
    expect(result).toEqual(response);
  });

  it('should read all users', async () => {
    const users = [{ id: '1', name: 'John' }];
    mockRead.execute.mockResolvedValue(users);

    const result = await controller.read();
    expect(mockRead.execute).toHaveBeenCalled();
    expect(result).toEqual(users);
  });

  it('should find a user', async () => {
    const dto = { id: '1' };
    const response = [{ id: '1', name: 'John' }];
    mockFind.execute.mockResolvedValue(response);

    const result = await controller.find(dto);
    expect(mockFind.execute).toHaveBeenCalledWith(dto);
    expect(result).toEqual(response);
  });

  it('should update a user', async () => {
    const id = '1';
    const dto = { name: 'Jane' };
    const response = { id: '1', name: 'Jane' };
    mockUpdate.execute.mockResolvedValue(response);

    const result = await controller.update(id, dto);
    expect(mockUpdate.execute).toHaveBeenCalledWith(id, dto);
    expect(result).toEqual(response);
  });

  it('should delete a user', async () => {
    const id = '1';
    const response = { id: '1', deleted: true };
    mockDelete.execute.mockResolvedValue(response);

    const result = await controller.delete(id);
    expect(mockDelete.execute).toHaveBeenCalledWith(id);
    expect(result).toEqual(response);
  });
});
