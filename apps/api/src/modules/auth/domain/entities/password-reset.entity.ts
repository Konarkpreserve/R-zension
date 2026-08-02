export class PasswordResetEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly token: string,
    public readonly expiresAt: Date,
    public isUsed: boolean = false
  ) {}
}
