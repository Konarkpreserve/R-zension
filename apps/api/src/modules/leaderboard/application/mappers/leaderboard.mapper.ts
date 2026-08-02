import { LeaderboardEntryEntity } from '../../domain/entities/leaderboard-entry.entity.js';
import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';

export class LeaderboardMapper {
  public static toEntryDto(entity: LeaderboardEntryEntity): LeaderboardEntryDto {
    return {
      userId: entity.getUserId(),
      rank: entity.getCurrentRank().position,
      score: entity.getScore().points,
      tier: entity.getTier(),
      division: entity.getDivision(),
      velocity: 0,
      momentum: 'STABLE',
    };
  }
}
