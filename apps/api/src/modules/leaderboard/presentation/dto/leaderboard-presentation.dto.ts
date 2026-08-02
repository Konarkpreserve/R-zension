import { LeaderboardEntryDto } from '../../application/dto/leaderboard-entry.dto.js';
import { RankHttpResponse } from '../responses/rank.response.js';

export class LeaderboardPresentationMapper {
  public static toRankResponse(dto: LeaderboardEntryDto): RankHttpResponse {
    return {
      userId: dto.userId,
      rank: dto.rank,
      score: dto.score,
      tier: dto.tier,
      division: dto.division,
      velocity: dto.velocity,
      momentum: dto.momentum,
    };
  }
}
