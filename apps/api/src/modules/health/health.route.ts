import { FastifyInstance } from 'fastify';
import { container, TOKENS } from '../../core/di/index.js';
import { healthRouteSchema } from './health.schema.js';

export async function healthRoutes(app: FastifyInstance): Promise<void> {
  const healthController = container.resolve(TOKENS.HealthController);

  app.get('/health', { schema: healthRouteSchema }, healthController.getHealth);
  app.get('/healthz', { schema: healthRouteSchema }, healthController.getHealth);
  app.get('/health/infra', healthController.getInfraHealth);
}
