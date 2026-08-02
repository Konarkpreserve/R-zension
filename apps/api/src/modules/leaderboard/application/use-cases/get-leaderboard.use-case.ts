import { LeaderboardDto } from '../dto/leaderboard.dto.js';
import { GetLeaderboardQuery } from '../queries/get-leaderboard.query.js';

export class GetLeaderboardUseCase {
  public async execute(query: GetLeaderboardQuery): Promise<LeaderboardDto> {
    return {
      seasonId: query.seasonId || 'season-1',
      totalParticipants: 0,
      entries: [],
    };
  }
}
