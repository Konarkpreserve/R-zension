import { ServiceToken } from '../../../core/di/service-token.js';
import { LeaderboardApplicationService } from '../application/services/leaderboard.application-service.js';
import { ILeaderboardRepository } from '../domain/interfaces/leaderboard-repository.interface.js';
import { LeaderboardController } from '../presentation/controllers/leaderboard.controller.js';

export const LEADERBOARD_TOKENS = {
  LeaderboardRepository: new ServiceToken<ILeaderboardRepository>('LeaderboardRepository'),
  LeaderboardApplicationService: new ServiceToken<LeaderboardApplicationService>('LeaderboardApplicationService'),
  LeaderboardController: new ServiceToken<LeaderboardController>('LeaderboardController'),
} as const;

export interface ILeaderboardModuleContract {
  getUserRank(userId: string): Promise<import('../application/dto/leaderboard-entry.dto.js').LeaderboardEntryDto | null>;
  recalculateUserRank(userId: string, scoreDelta: number): Promise<import('../application/dto/leaderboard-entry.dto.js').LeaderboardEntryDto>;
}
