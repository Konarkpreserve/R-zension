import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { ErrorFormatter, NotFoundError } from '../common/errors/index.js';
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

  // Custom 404 Not Found Handler
  app.setNotFoundHandler((request: FastifyRequest, reply: FastifyReply) => {
    const notFoundError = new NotFoundError(`Route ${request.method} ${request.url} not found`);
    const { statusCode, payload } = ErrorFormatter.format(notFoundError, request.id, config.app.isProduction);

    reply.status(statusCode).send(payload);
  });

  // Centralized Global Fastify Error Handler
  app.setErrorHandler((error: Error, request: FastifyRequest, reply: FastifyReply) => {
    const correlationId = (request as FastifyRequest & { correlationId?: string }).correlationId || request.id;
    const { statusCode, payload } = ErrorFormatter.format(error, request.id, config.app.isProduction);

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
        },
      },
      `API Error [${payload.error.code}]: ${payload.error.message}`
    );

    reply.status(statusCode).send(payload);
  });

  // Register Business Modules
  await app.register(healthRoutes);
  await app.register(healthRoutes, { prefix: config.app.apiPrefix });

  return app;
}
