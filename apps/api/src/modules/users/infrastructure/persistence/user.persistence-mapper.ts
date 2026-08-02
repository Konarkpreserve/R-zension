import { UserEntity } from '../../domain/entities/user.entity.js';
import { UserStatusEnum } from '../../domain/enums/user-status.enum.js';
import { DisplayNameValueObject } from '../../domain/value-objects/display-name.vo.js';
import { EmailValueObject } from '../../domain/value-objects/email.vo.js';
import { NotificationPreferencesValueObject } from '../../domain/value-objects/notification-preferences.vo.js';
import { PrivacySettingsValueObject } from '../../domain/value-objects/privacy-settings.vo.js';
import { RoleAssignmentValueObject } from '../../domain/value-objects/role-assignment.vo.js';
import { UserPreferencesValueObject } from '../../domain/value-objects/user-preferences.vo.js';
import { UserProfileValueObject } from '../../domain/value-objects/user-profile.vo.js';
import { UserSettingsValueObject } from '../../domain/value-objects/user-settings.vo.js';

export interface UserDbRecord {
  id: string;
  email: string;
  displayName: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserPersistenceMapper {
  public static toDomain(record: UserDbRecord): UserEntity {
    return new UserEntity({
      id: record.id,
      email: new EmailValueObject(record.email),
      profile: new UserProfileValueObject(new DisplayNameValueObject(record.displayName)),
      settings: new UserSettingsValueObject(
        new UserPreferencesValueObject(),
        new NotificationPreferencesValueObject(),
        new PrivacySettingsValueObject()
      ),
      role: new RoleAssignmentValueObject(),
      status: record.status as UserStatusEnum,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  public static toPersistence(entity: UserEntity): UserDbRecord {
    return {
      id: entity.getId(),
      email: entity.getEmail().value,
      displayName: entity.getProfile().displayName.value,
      status: entity.getStatus(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }
}
