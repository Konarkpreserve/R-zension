import { PrismaClient } from '@prisma/client';
import { UserEntity } from '../../../domain/entities/user.entity.js';
import { IUserRepository } from '../../../domain/interfaces/user-repository.interface.js';

export class PrismaUserRepository implements IUserRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findById(_id: string): Promise<UserEntity | null> {
    return null;
  }

  public async findByEmail(_email: string): Promise<UserEntity | null> {
    return null;
  }

  public async save(user: UserEntity): Promise<UserEntity> {
    return user;
  }

  public async delete(_id: string): Promise<boolean> {
    return true;
  }
}
