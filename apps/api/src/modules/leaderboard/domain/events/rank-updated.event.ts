export class RankUpdatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly oldRank: number,
    public readonly newRank: number
  ) {
    this.occurredAt = new Date();
  }
}
