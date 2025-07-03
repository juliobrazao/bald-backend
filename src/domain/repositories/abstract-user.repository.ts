export abstract class IUserRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
  abstract read(): Promise<Entity[]>;
  abstract find(params: Params): Promise<Entity[]>;
}
