import { NotificationPreferencesValueObject } from './notification-preferences.vo.js';
import { PrivacySettingsValueObject } from './privacy-settings.vo.js';
import { UserPreferencesValueObject } from './user-preferences.vo.js';

export class UserSettingsValueObject {
  constructor(
    public readonly preferences: UserPreferencesValueObject,
    public readonly notifications: NotificationPreferencesValueObject,
    public readonly privacy: PrivacySettingsValueObject
  ) {}
}
