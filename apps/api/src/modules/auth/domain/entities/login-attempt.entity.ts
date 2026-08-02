export class LoginAttemptEntity {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public readonly ipAddress: string,
    public readonly success: boolean,
    public readonly attemptedAt: Date
  ) {}
}
