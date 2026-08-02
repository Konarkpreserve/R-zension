import { FastifyReply, FastifyRequest } from 'fastify';
import { appLogger } from '../../../../common/logger/index.js';
import { LeaderboardApplicationService } from '../../application/services/leaderboard.application-service.js';

export class LeaderboardController {
  constructor(private readonly leaderboardApplicationService: LeaderboardApplicationService) {}

  public getLeaderboard = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    appLogger.debug({ reqId: request.requestContext?.requestId }, 'Handling Get Leaderboard endpoint (Placeholder)');
    reply.status(501).send({ success: false, message: 'Get Leaderboard endpoint not implemented yet' });
  };

  public getRank = async (
    _request: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Rank endpoint not implemented yet' });
  };

  public getRankHistory = async (
    _request: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Rank History endpoint not implemented yet' });
  };

  public calculateRank = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Calculate Rank endpoint not implemented yet' });
  };

  public promoteUser = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Promote User endpoint not implemented yet' });
  };

  public demoteUser = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Demote User endpoint not implemented yet' });
  };

  public getSeasonalLeaderboard = async (
    _request: FastifyRequest<{ Params: { seasonId: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Seasonal Leaderboard endpoint not implemented yet' });
  };

  public getLeague = async (
    _request: FastifyRequest<{ Params: { tier: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get League endpoint not implemented yet' });
  };

  public getPerformanceSnapshot = async (
    _request: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Performance Snapshot endpoint not implemented yet' });
  };

  public getTopPlayers = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Top Players endpoint not implemented yet' });
  };

  public getNearbyPlayers = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    reply.status(501).send({ success: false, message: 'Get Nearby Players endpoint not implemented yet' });
  };
}
