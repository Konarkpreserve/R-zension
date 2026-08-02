import { AuthSessionEntity } from '../../../domain/entities/auth-session.entity.js';
import { IAuthSessionRepository } from '../../../domain/interfaces/auth-session-repository.interface.js';

export class InMemoryAuthSessionRepository implements IAuthSessionRepository {
  private readonly storage = new Map<string, AuthSessionEntity>();

  public async findById(id: string): Promise<AuthSessionEntity | null> {
    return this.storage.get(id) || null;
  }

  public async findByRefreshToken(_refreshToken: string): Promise<AuthSessionEntity | null> {
    return null;
  }

  public async findByUserId(userId: string): Promise<AuthSessionEntity[]> {
    return Array.from(this.storage.values()).filter((s) => s.getUserId() === userId);
  }

  public async save(session: AuthSessionEntity): Promise<AuthSessionEntity> {
    this.storage.set(session.getId(), session);
    return session;
  }

  public async revoke(id: string): Promise<boolean> {
    const session = this.storage.get(id);
    if (session) {
      session.revoke();
      return true;
    }
    return false;
  }
}
