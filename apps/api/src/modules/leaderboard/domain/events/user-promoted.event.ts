import { TierEnum } from '../enums/tier.enum.js';

export class UserPromotedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly userId: string,
    public readonly oldTier: TierEnum,
    public readonly newTier: TierEnum
  ) {
    this.occurredAt = new Date();
  }
}
