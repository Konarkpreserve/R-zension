import { AuthSessionEntity } from '../../domain/entities/auth-session.entity.js';
import { SessionStatusEnum } from '../../domain/enums/session-status.enum.js';
import { DeviceInfoValueObject } from '../../domain/value-objects/device-info.vo.js';

export interface AuthSessionDbRecord {
  id: string;
  userId: string;
  refreshToken: string;
  userAgent: string;
  ipAddress: string;
  status: string;
  createdAt: Date;
  expiresAt: Date;
}

export class AuthSessionPersistenceMapper {
  public static toDomain(record: AuthSessionDbRecord): AuthSessionEntity {
    return new AuthSessionEntity({
      id: record.id,
      userId: record.userId,
      refreshToken: record.refreshToken,
      deviceInfo: new DeviceInfoValueObject(record.userAgent, record.ipAddress),
      status: record.status as SessionStatusEnum,
      createdAt: record.createdAt,
      expiresAt: record.expiresAt,
    });
  }

  public static toPersistence(entity: AuthSessionEntity): AuthSessionDbRecord {
    return {
      id: entity.getId(),
      userId: entity.getUserId(),
      refreshToken: 'placeholder',
      userAgent: 'placeholder',
      ipAddress: '127.0.0.1',
      status: entity.getStatus(),
      createdAt: new Date(),
      expiresAt: new Date(),
    };
  }
}
