import { UserEntity } from '../../../domain/entities/user.entity.js';
import { IUserRepository } from '../../../domain/interfaces/user-repository.interface.js';

export class InMemoryUserRepository implements IUserRepository {
  private readonly storage = new Map<string, UserEntity>();

  public async findById(id: string): Promise<UserEntity | null> {
    return this.storage.get(id) || null;
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    return Array.from(this.storage.values()).find((u) => u.getEmail().value === email) || null;
  }

  public async save(user: UserEntity): Promise<UserEntity> {
    this.storage.set(user.getId(), user);
    return user;
  }

  public async delete(id: string): Promise<boolean> {
    return this.storage.delete(id);
  }
}
