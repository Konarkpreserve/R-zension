import { FastifyReply, FastifyRequest } from 'fastify';
import { healthLogger } from '../../common/logger/index.js';
import { HealthQuery } from '../../common/validation/index.js';
import { prismaProvider } from '../../core/prisma/index.js';
import { HealthService } from './health.service.js';

export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  public getHealth = async (
    request: FastifyRequest<{ Querystring: HealthQuery }>,
    reply: FastifyReply
  ): Promise<void> => {
    const ctx = request.requestContext;
    healthLogger.debug(
      { reqId: ctx?.requestId, correlationId: ctx?.correlationId, query: request.query },
      'Executing repository-backed health check status verification'
    );

    const healthStatus = await this.healthService.getHealthStatus(request.query);
    reply.status(200).send(healthStatus);
  };

  public getInfraHealth = async (
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    const ctx = request.requestContext;
    healthLogger.debug(
      { reqId: ctx?.requestId, correlationId: ctx?.correlationId },
      'Executing infrastructure health verification check'
    );

    const dbStatus = await prismaProvider.verifyConnection();
    const isInfraOk = prismaProvider.isInfrastructureReady();

    const response = {
      status: dbStatus.isConnected ? 'ok' : 'degraded',
      timestamp: new Date().toISOString(),
      services: {
        prisma: {
          status: isInfraOk ? 'initialized' : 'standby',
          client: isInfraOk ? 'ready' : 'offline',
        },
        database: {
          provider: dbStatus.provider,
          status: dbStatus.isConnected ? 'connected' : 'disconnected',
          latencyMs: dbStatus.latencyMs,
          lastConnectedAt: dbStatus.lastConnectedAt,
          error: dbStatus.error,
        },
      },
    };

    const statusCode = dbStatus.isConnected ? 200 : 503;
    reply.status(statusCode).send(response);
  };
}
