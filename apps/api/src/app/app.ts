import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { errorLogger, logger } from '../common/logger/index.js';
import { config } from '../config/index.js';
import { registerGlobalHooks } from '../hooks/index.js';
import { healthRoutes } from '../modules/health/health.route.js';
import { registerCorePlugins } from '../plugins/sensible.plugin.js';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    loggerInstance: logger as any,
    disableRequestLogging: true,
  });

  // Register Core Fastify Plugins
  await registerCorePlugins(app);

  // Register Global Request Hooks
  registerGlobalHooks(app);

  // Custom Error Handler for Error Logging
  app.setErrorHandler((error: Error & { statusCode?: number; code?: string }, request: FastifyRequest, reply: FastifyReply) => {
    const statusCode = error.statusCode || 500;
    const correlationId = (request as FastifyRequest & { correlationId?: string }).correlationId || request.id;

    errorLogger.error(
      {
        reqId: request.id,
        correlationId,
        method: request.method,
        url: request.url,
        statusCode,
        err: {
          name: error.name,
          message: error.message,
          stack: error.stack,
          code: error.code,
        },
      },
      `HTTP Error ${statusCode}: ${error.message}`
    );

    reply.status(statusCode).send({
      statusCode,
      error: error.name || 'Internal Server Error',
      message: error.message || 'An unexpected error occurred',
      timestamp: new Date().toISOString(),
    });
  });

  // Register Business Modules
  await app.register(healthRoutes);
  await app.register(healthRoutes, { prefix: config.app.apiPrefix });

  return app;
}
