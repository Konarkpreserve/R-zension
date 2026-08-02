export class UserLoggedInEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly sessionId: string
  ) {
    this.occurredAt = new Date();
  }
}
