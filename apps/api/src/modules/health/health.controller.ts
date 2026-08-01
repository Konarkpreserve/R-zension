import { FastifyReply, FastifyRequest } from 'fastify';
import { healthLogger } from '../../common/logger/index.js';
import { HealthService } from './health.service.js';

export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  public getHealth = async (request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const correlationId = (request as FastifyRequest & { correlationId?: string }).correlationId || request.id;
    healthLogger.debug({ reqId: request.id, correlationId }, 'Executing health check status verification');

    const healthStatus = this.healthService.getHealthStatus();
    reply.status(200).send(healthStatus);
  };
}
