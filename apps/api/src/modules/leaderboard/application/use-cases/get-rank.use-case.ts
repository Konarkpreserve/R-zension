import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';
import { GetRankQuery } from '../queries/get-rank.query.js';

export class GetRankUseCase {
  public async execute(query: GetRankQuery): Promise<LeaderboardEntryDto> {
    return {
      userId: query.userId,
      rank: 1,
      score: 1000,
      tier: 'ASCENDANT',
      division: 'DIVISION_I',
      velocity: 10,
      momentum: 'ASCENDING',
    };
  }
}
