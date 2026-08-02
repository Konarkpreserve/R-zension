export class UserRegisteredEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly email: string
  ) {
    this.occurredAt = new Date();
  }
}
