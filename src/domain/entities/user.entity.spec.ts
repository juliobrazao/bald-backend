import { UserEntity } from './user.entity';

describe('UserEntity', () => {
  it('should create a user with all properties', () => {
    const userProps = {
      id: '123',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'securepassword',
      createdAt: Date.now(),
    };

    const user = new UserEntity(userProps);

    expect(user).toBeInstanceOf(UserEntity);
    expect(user.id).toBe(userProps.id);
    expect(user.name).toBe(userProps.name);
    expect(user.email).toBe(userProps.email);
    expect(user.password).toBe(userProps.password);
    expect(user.createdAt).toBe(userProps.createdAt);
  });

  it('should allow partial creation of user', () => {
    const partialProps = {
      name: 'Jane Doe',
      email: 'jane@example.com',
    };

    const user = new UserEntity(partialProps);

    expect(user.name).toBe('Jane Doe');
    expect(user.email).toBe('jane@example.com');
    expect(user.id).toBeUndefined();
    expect(user.password).toBeUndefined();
    expect(user.createdAt).toBeUndefined();
  });
});
