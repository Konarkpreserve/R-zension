import Fastify, { FastifyInstance } from 'fastify';
import { config } from '../config/index.js';
import { registerGlobalHooks } from '../hooks/index.js';
import { healthRoutes } from '../modules/health/health.route.js';
import { registerCorePlugins } from '../plugins/sensible.plugin.js';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    logger: {
      level: config.logging.level,
    },
  });

  // Register Core Fastify Plugins
  await registerCorePlugins(app);

  // Register Global Request Hooks
  registerGlobalHooks(app);

  // Register Business Modules
  await app.register(healthRoutes);
  await app.register(healthRoutes, { prefix: config.app.apiPrefix });

  return app;
}
