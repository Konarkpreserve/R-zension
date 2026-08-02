import { TierEnum } from '../enums/tier.enum.js';

export class LeagueValueObject {
  constructor(
    public readonly name: string,
    public readonly tier: TierEnum
  ) {}
}
