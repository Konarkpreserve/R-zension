import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';
import { GetNearbyPlayersQuery } from '../queries/get-nearby-players.query.js';

export class GetNearbyPlayersUseCase {
  public async execute(_query: GetNearbyPlayersQuery): Promise<LeaderboardEntryDto[]> {
    return [];
  }
}
