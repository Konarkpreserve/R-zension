import { PrismaClient } from '@prisma/client';
import { AuthSessionEntity } from '../../../domain/entities/auth-session.entity.js';
import { IAuthSessionRepository } from '../../../domain/interfaces/auth-session-repository.interface.js';

export class PrismaAuthSessionRepository implements IAuthSessionRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findById(_id: string): Promise<AuthSessionEntity | null> {
    return null;
  }

  public async findByRefreshToken(_refreshToken: string): Promise<AuthSessionEntity | null> {
    return null;
  }

  public async findByUserId(_userId: string): Promise<AuthSessionEntity[]> {
    return [];
  }

  public async save(session: AuthSessionEntity): Promise<AuthSessionEntity> {
    return session;
  }

  public async revoke(_id: string): Promise<boolean> {
    return true;
  }
}
