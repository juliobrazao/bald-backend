export abstract class IUserRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
  abstract read(): Promise<Entity[]>;
  abstract find(params: Params): Promise<Entity[]>;
  abstract update(id: string, params: Params): Promise<Entity>;
  abstract delete(id: string): Promise<Entity>;
}
