export class AuthAuditLogEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly action: string,
    public readonly ipAddress: string,
    public readonly createdAt: Date
  ) {}
}
