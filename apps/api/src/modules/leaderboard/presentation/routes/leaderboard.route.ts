import { FastifyInstance } from 'fastify';
import { container } from '../../../../core/di/container.js';
import { LEADERBOARD_TOKENS } from '../../contracts/leaderboard-module.contract.js';
import { calculateRankSchema, getLeaderboardSchema } from '../validators/leaderboard.validator.js';

export async function leaderboardRoutes(app: FastifyInstance): Promise<void> {
  const leaderboardController = container.resolve(LEADERBOARD_TOKENS.LeaderboardController);

  app.get('/leaderboard', { schema: { querystring: getLeaderboardSchema } }, leaderboardController.getLeaderboard);
  app.get('/leaderboard/top', leaderboardController.getTopPlayers);
  app.get('/leaderboard/nearby', leaderboardController.getNearbyPlayers);
  app.get('/leaderboard/rank/:userId', leaderboardController.getRank);
  app.get('/leaderboard/rank/:userId/history', leaderboardController.getRankHistory);
  app.get('/leaderboard/snapshot/:userId', leaderboardController.getPerformanceSnapshot);
  app.get('/leaderboard/season/:seasonId', leaderboardController.getSeasonalLeaderboard);
  app.get('/leaderboard/league/:tier', leaderboardController.getLeague);
  app.post('/leaderboard/calculate', { schema: { body: calculateRankSchema } }, leaderboardController.calculateRank);
  app.post('/leaderboard/promote', leaderboardController.promoteUser);
  app.post('/leaderboard/demote', leaderboardController.demoteUser);
}
