export class EmailVerificationEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly token: string,
    public readonly expiresAt: Date,
    public isVerified: boolean = false
  ) {}
}
