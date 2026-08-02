import { LeaderboardEntryEntity } from '../../domain/entities/leaderboard-entry.entity.js';
import { DivisionEnum } from '../../domain/enums/division.enum.js';
import { TierEnum } from '../../domain/enums/tier.enum.js';
import { CurrentRankValueObject } from '../../domain/value-objects/current-rank.vo.js';
import { MomentumValueObject } from '../../domain/value-objects/momentum.vo.js';
import { PeakRankValueObject } from '../../domain/value-objects/peak-rank.vo.js';
import { ScoreValueObject } from '../../domain/value-objects/score.vo.js';
import { VelocityValueObject } from '../../domain/value-objects/velocity.vo.js';

export interface LeaderboardDbRecord {
  id: string;
  userId: string;
  score: number;
  rank: number;
  peakRank: number;
  tier: string;
  division: string;
  updatedAt: Date;
}

export class LeaderboardPersistenceMapper {
  public static toDomain(record: LeaderboardDbRecord): LeaderboardEntryEntity {
    return new LeaderboardEntryEntity({
      id: record.id,
      userId: record.userId,
      score: new ScoreValueObject(record.score),
      currentRank: new CurrentRankValueObject(record.rank),
      peakRank: new PeakRankValueObject(record.peakRank, record.updatedAt),
      tier: record.tier as TierEnum,
      division: record.division as DivisionEnum,
      velocity: new VelocityValueObject(0),
      momentum: new MomentumValueObject('STABLE'),
      updatedAt: record.updatedAt,
    });
  }

  public static toPersistence(entity: LeaderboardEntryEntity): LeaderboardDbRecord {
    return {
      id: entity.getId(),
      userId: entity.getUserId(),
      score: entity.getScore().points,
      rank: entity.getCurrentRank().position,
      peakRank: entity.getCurrentRank().position,
      tier: entity.getTier(),
      division: entity.getDivision(),
      updatedAt: new Date(),
    };
  }
}
