import 'reflect-metadata';
import { validate } from 'class-validator';
import { CreateUserRequestDTO } from './create-user.request.dto';

describe('CreateUserRequestDTO', () => {
  it('should fail validation if any field is not a string', async () => {
    const dto = new CreateUserRequestDTO();

    (dto as any).id = 123;
    (dto as any).name = 456;
    (dto as any).email = 789;
    (dto as any).password = 101112;

    const errors = await validate(dto);
    expect(errors.length).toBe(4);
    expect(errors.map((e) => e.property)).toEqual(
      expect.arrayContaining(['id', 'name', 'email', 'password']),
    );
  });
});
