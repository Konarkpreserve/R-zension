import { CalculateRankCommand } from '../commands/calculate-rank.command.js';
import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';

export class CalculateRankUseCase {
  public async execute(command: CalculateRankCommand): Promise<LeaderboardEntryDto> {
    return {
      userId: command.userId,
      rank: 1,
      score: 1000 + command.scoreDelta,
      tier: 'ASCENDANT',
      division: 'DIVISION_I',
      velocity: 5,
      momentum: 'ASCENDING',
    };
  }
}
