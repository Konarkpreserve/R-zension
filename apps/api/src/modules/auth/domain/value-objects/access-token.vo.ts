export class AccessTokenValueObject {
  constructor(
    public readonly token: string,
    public readonly expiresAt: Date
  ) {}

  public isExpired(): boolean {
    return new Date() > this.expiresAt;
  }
}
