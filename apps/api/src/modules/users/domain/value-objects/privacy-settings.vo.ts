export class PrivacySettingsValueObject {
  constructor(
    public readonly isPublicProfile: boolean = true,
    public readonly showActivityStatus: boolean = true,
    public readonly showEmail: boolean = false
  ) {}
}
