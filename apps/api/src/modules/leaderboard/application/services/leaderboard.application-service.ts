import { CalculateRankCommand } from '../commands/calculate-rank.command.js';
import { DemoteUserCommand } from '../commands/demote-user.command.js';
import { PromoteUserCommand } from '../commands/promote-user.command.js';
import { LeaderboardEntryDto } from '../dto/leaderboard-entry.dto.js';
import { LeaderboardDto } from '../dto/leaderboard.dto.js';
import { PerformanceSnapshotDto } from '../dto/performance-snapshot.dto.js';
import { GetLeagueQuery } from '../queries/get-league.query.js';
import { GetNearbyPlayersQuery } from '../queries/get-nearby-players.query.js';
import { GetRankQuery } from '../queries/get-rank.query.js';
import { GetSeasonalLeaderboardQuery } from '../queries/get-seasonal-leaderboard.query.js';
import { GetTopPlayersQuery } from '../queries/get-top-players.query.js';
import { CalculateRankUseCase } from '../use-cases/calculate-rank.use-case.js';
import { DemoteUserUseCase } from '../use-cases/demote-user.use-case.js';
import { GetDemotionCandidatesUseCase } from '../use-cases/get-demotion-candidates.use-case.js';
import { GetLeagueUseCase } from '../use-cases/get-league.use-case.js';
import { GetLeaderboardUseCase } from '../use-cases/get-leaderboard.use-case.js';
import { GetNearbyPlayersUseCase } from '../use-cases/get-nearby-players.use-case.js';
import { GetPercentileUseCase } from '../use-cases/get-percentile.use-case.js';
import { GetPerformanceSnapshotUseCase } from '../use-cases/get-performance-snapshot.use-case.js';
import { GetPromotionCandidatesUseCase } from '../use-cases/get-promotion-candidates.use-case.js';
import { GetRankHistoryUseCase } from '../use-cases/get-rank-history.use-case.js';
import { GetRankUseCase } from '../use-cases/get-rank.use-case.js';
import { GetSeasonalLeaderboardUseCase } from '../use-cases/get-seasonal-leaderboard.use-case.js';
import { GetTopPlayersUseCase } from '../use-cases/get-top-players.use-case.js';
import { PromoteUserUseCase } from '../use-cases/promote-user.use-case.js';

export class LeaderboardApplicationService {
  private readonly getLeaderboardUseCase = new GetLeaderboardUseCase();
  private readonly getRankUseCase = new GetRankUseCase();
  private readonly getRankHistoryUseCase = new GetRankHistoryUseCase();
  private readonly calculateRankUseCase = new CalculateRankUseCase();
  private readonly promoteUserUseCase = new PromoteUserUseCase();
  private readonly demoteUserUseCase = new DemoteUserUseCase();
  private readonly getSeasonalLeaderboardUseCase = new GetSeasonalLeaderboardUseCase();
  private readonly getLeagueUseCase = new GetLeagueUseCase();
  private readonly getPerformanceSnapshotUseCase = new GetPerformanceSnapshotUseCase();
  private readonly getPercentileUseCase = new GetPercentileUseCase();
  private readonly getTopPlayersUseCase = new GetTopPlayersUseCase();
  private readonly getNearbyPlayersUseCase = new GetNearbyPlayersUseCase();
  private readonly getPromotionCandidatesUseCase = new GetPromotionCandidatesUseCase();
  private readonly getDemotionCandidatesUseCase = new GetDemotionCandidatesUseCase();

  public async getLeaderboard(): Promise<LeaderboardDto> {
    return this.getLeaderboardUseCase.execute({});
  }

  public async getRank(query: GetRankQuery): Promise<LeaderboardEntryDto> {
    return this.getRankUseCase.execute(query);
  }

  public async getRankHistory(userId: string): Promise<Array<{ rank: number; recordedAt: string }>> {
    return this.getRankHistoryUseCase.execute(userId);
  }

  public async calculateRank(command: CalculateRankCommand): Promise<LeaderboardEntryDto> {
    return this.calculateRankUseCase.execute(command);
  }

  public async promoteUser(command: PromoteUserCommand): Promise<boolean> {
    return this.promoteUserUseCase.execute(command);
  }

  public async demoteUser(command: DemoteUserCommand): Promise<boolean> {
    return this.demoteUserUseCase.execute(command);
  }

  public async getSeasonalLeaderboard(query: GetSeasonalLeaderboardQuery): Promise<LeaderboardDto> {
    return this.getSeasonalLeaderboardUseCase.execute(query);
  }

  public async getLeague(query: GetLeagueQuery): Promise<LeaderboardEntryDto[]> {
    return this.getLeagueUseCase.execute(query);
  }

  public async getPerformanceSnapshot(userId: string): Promise<PerformanceSnapshotDto> {
    return this.getPerformanceSnapshotUseCase.execute(userId);
  }

  public async getPercentile(userId: string): Promise<number> {
    return this.getPercentileUseCase.execute(userId);
  }

  public async getTopPlayers(query: GetTopPlayersQuery): Promise<LeaderboardEntryDto[]> {
    return this.getTopPlayersUseCase.execute(query);
  }

  public async getNearbyPlayers(query: GetNearbyPlayersQuery): Promise<LeaderboardEntryDto[]> {
    return this.getNearbyPlayersUseCase.execute(query);
  }

  public async getPromotionCandidates(): Promise<LeaderboardEntryDto[]> {
    return this.getPromotionCandidatesUseCase.execute();
  }

  public async getDemotionCandidates(): Promise<LeaderboardEntryDto[]> {
    return this.getDemotionCandidatesUseCase.execute();
  }
}
