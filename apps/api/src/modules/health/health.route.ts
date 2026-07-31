import { FastifyInstance } from 'fastify';
import { HealthController } from './health.controller.js';
import { healthCheckSchema } from './health.schema.js';
import { HealthService } from './health.service.js';

export async function healthRoutes(app: FastifyInstance): Promise<void> {
  const healthService = new HealthService();
  const healthController = new HealthController(healthService);

  app.get('/health', { schema: healthCheckSchema }, healthController.getHealth);
  app.get('/healthz', { schema: healthCheckSchema }, healthController.getHealth);
}
