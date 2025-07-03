export abstract class IUserRepository<Entity, Params> {
  abstract create(params: Params): Promise<Entity>;
}
