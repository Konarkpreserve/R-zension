import { AuthSessionEntity } from '../entities/auth-session.entity.js';

export interface IAuthSessionRepository {
  findById(id: string): Promise<AuthSessionEntity | null>;
  findByRefreshToken(refreshToken: string): Promise<AuthSessionEntity | null>;
  findByUserId(userId: string): Promise<AuthSessionEntity[]>;
  save(session: AuthSessionEntity): Promise<AuthSessionEntity>;
  revoke(id: string): Promise<boolean>;
}
