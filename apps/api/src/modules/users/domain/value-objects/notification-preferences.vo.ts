export class NotificationPreferencesValueObject {
  constructor(
    public readonly emailNotifications: boolean = true,
    public readonly pushNotifications: boolean = true,
    public readonly marketingEmails: boolean = false
  ) {}
}
