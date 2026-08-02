export class InsightGeneratedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly insightId: string
  ) {
    this.occurredAt = new Date();
  }
}
