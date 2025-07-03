export class UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: number;

  constructor(params: Partial<UserEntity>) {
    Object.assign(this, params);
  }
}
