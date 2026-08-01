import { FastifyReply, FastifyRequest } from 'fastify';
import { healthLogger } from '../../common/logger/index.js';
import { HealthQuery } from '../../common/validation/index.js';
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
      'Executing validated health check status verification'
    );

    const healthStatus = this.healthService.getHealthStatus(request.query);
    reply.status(200).send(healthStatus);
  };
}
