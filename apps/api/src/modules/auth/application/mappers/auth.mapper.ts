import { AuthSessionEntity } from '../../domain/entities/auth-session.entity.js';
import { AuthSessionDto } from '../dto/auth-session.dto.js';

export class AuthMapper {
  public static toSessionDto(entity: AuthSessionEntity): AuthSessionDto {
    return {
      id: entity.getId(),
      userId: entity.getUserId(),
      userAgent: 'Placeholder User Agent',
      ipAddress: '127.0.0.1',
      status: entity.getStatus(),
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 86400000).toISOString(),
    };
  }
}
