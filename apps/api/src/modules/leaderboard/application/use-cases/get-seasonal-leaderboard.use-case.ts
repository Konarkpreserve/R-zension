import { LeaderboardDto } from '../dto/leaderboard.dto.js';
import { GetSeasonalLeaderboardQuery } from '../queries/get-seasonal-leaderboard.query.js';

export class GetSeasonalLeaderboardUseCase {
  public async execute(query: GetSeasonalLeaderboardQuery): Promise<LeaderboardDto> {
    return {
      seasonId: query.seasonId,
      totalParticipants: 0,
      entries: [],
    };
  }
}
