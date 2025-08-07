import { Controller, Get, Res } from '@nestjs/common';
import { FastifyReply } from 'fastify';

@Controller('fast')
export class FastController {
  @Get()
  async getFastParams(@Res() res: FastifyReply): Promise<void> {
    try {
      res.header('name', 'clover').status(200).send({ message: 'in a bottle' });
    } catch (err) {
      throw new Error(err);
    }
  }
}
