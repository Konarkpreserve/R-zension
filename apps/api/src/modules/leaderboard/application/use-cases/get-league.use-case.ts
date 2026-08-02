import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';
import { GetLeagueQuery } from '../queries/get-league.query.js';

export class GetLeagueUseCase {
  public async execute(_query: GetLeagueQuery): Promise<LeaderboardEntryDto[]> {
    return [];
  }
}
