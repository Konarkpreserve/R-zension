export class ReportGeneratedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly reportId: string
  ) {
    this.occurredAt = new Date();
  }
}
