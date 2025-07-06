import { CreateUserResponseDTO } from './create-user.response.dto';

describe('CreateUserResponseDTO', () => {
  it('should hold the expected properties', () => {
    const dto = new CreateUserResponseDTO();
    dto.id = '1';
    dto.name = 'John';
    dto.email = 'john@example.com';
    dto.password = 'secret';
    dto.createdAt = 1234567890;

    expect(dto.id).toBe('1');
    expect(dto.name).toBe('John');
    expect(dto.email).toBe('john@example.com');
    expect(dto.password).toBe('secret');
    expect(dto.createdAt).toBe(1234567890);
  });
});
