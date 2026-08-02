import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';
import { GetTopPlayersQuery } from '../queries/get-top-players.query.js';

export class GetTopPlayersUseCase {
  public async execute(_query: GetTopPlayersQuery): Promise<LeaderboardEntryDto[]> {
    return [];
  }
}
