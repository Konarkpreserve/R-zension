import { FastifyReply, FastifyRequest } from 'fastify';
import { HealthService } from './health.service.js';

export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  public getHealth = async (_request: FastifyRequest, reply: FastifyReply): Promise<void> => {
    const healthStatus = this.healthService.getHealthStatus();
    reply.status(200).send(healthStatus);
  };
}
