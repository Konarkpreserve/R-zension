import { UserEntity } from '../entities/user.entity.js';

export interface IUserRepository {
  findById(id: string): Promise<UserEntity | null>;
  findByEmail(email: string): Promise<UserEntity | null>;
  save(user: UserEntity): Promise<UserEntity>;
  delete(id: string): Promise<boolean>;
}
