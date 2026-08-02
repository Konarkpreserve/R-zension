import { DivisionEnum } from '../enums/division.enum.js';
import { TierEnum } from '../enums/tier.enum.js';
import { CurrentRankValueObject } from '../value-objects/current-rank.vo.js';
import { MomentumValueObject } from '../value-objects/momentum.vo.js';
import { PeakRankValueObject } from '../value-objects/peak-rank.vo.js';
import { ScoreValueObject } from '../value-objects/score.vo.js';
import { VelocityValueObject } from '../value-objects/velocity.vo.js';

export interface LeaderboardEntryProps {
  id: string;
  userId: string;
  score: ScoreValueObject;
  currentRank: CurrentRankValueObject;
  peakRank: PeakRankValueObject;
  tier: TierEnum;
  division: DivisionEnum;
  velocity: VelocityValueObject;
  momentum: MomentumValueObject;
  updatedAt: Date;
}

export class LeaderboardEntryEntity {
  constructor(private readonly props: LeaderboardEntryProps) {}

  public getId(): string {
    return this.props.id;
  }

  public getUserId(): string {
    return this.props.userId;
  }

  public getScore(): ScoreValueObject {
    return this.props.score;
  }

  public getCurrentRank(): CurrentRankValueObject {
    return this.props.currentRank;
  }

  public getTier(): TierEnum {
    return this.props.tier;
  }

  public getDivision(): DivisionEnum {
    return this.props.division;
  }
}
