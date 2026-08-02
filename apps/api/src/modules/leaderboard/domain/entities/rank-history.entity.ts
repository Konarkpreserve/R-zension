import { TierEnum } from '../enums/tier.enum.js';

export class RankHistoryEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly rank: number,
    public readonly tier: TierEnum,
    public readonly score: number,
    public readonly recordedAt: Date
  ) {}
}
