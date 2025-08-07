import { Test, TestingModule } from '@nestjs/testing';
import { FastController } from './fast.controller';
import { FastifyReply } from 'fastify';

describe('FastController', () => {
  let controller: FastController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FastController],
    }).compile();

    controller = module.get<FastController>(FastController);
  });

  it('should set header, status, and send a response', async () => {
    const sendMock = jest.fn().mockReturnThis();
    const statusMock = jest.fn().mockReturnThis();
    const headerMock = jest.fn().mockReturnThis();

    const mockRes: Partial<FastifyReply> = {
      header: headerMock,
      status: statusMock,
      send: sendMock,
    };

    await controller.getFastParams(mockRes as FastifyReply);

    expect(headerMock).toHaveBeenCalledWith('name', 'clover');
    expect(statusMock).toHaveBeenCalledWith(200);
    expect(sendMock).toHaveBeenCalledWith({ message: 'in a bottle' });
  });

  it('should throw an error when res.header fails', async () => {
    const mockRes: Partial<FastifyReply> = {
      header: jest.fn(() => {
        throw new Error('header failed');
      }),
      status: jest.fn().mockReturnThis(),
      send: jest.fn().mockReturnThis(),
    };

    await expect(
      controller.getFastParams(mockRes as FastifyReply),
    ).rejects.toThrow('Error: header failed');
  });
});
