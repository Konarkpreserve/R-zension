import Fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

import { ErrorFormatter, NotFoundError } from '../common/errors/index.js';
import { errorLogger, logger } from '../common/logger/index.js';
import { registerRequestContextDecorator } from '../common/request-context/index.js';
import { configureZodValidation } from '../common/validation/index.js';
import { config } from '../config/index.js';
import { registerGlobalHooks } from '../hooks/index.js';
import { authRoutes } from '../modules/auth/presentation/routes/auth.route.js';
import { exampleRoutes } from '../modules/example/presentation/routes/example.route.js';
import { healthRoutes } from '../modules/health/health.route.js';
import { leaderboardRoutes } from '../modules/leaderboard/presentation/routes/leaderboard.route.js';
import { oracleRoutes } from '../modules/oracle/presentation/routes/oracle.route.js';
import { userRoutes } from '../modules/users/presentation/routes/user.route.js';
import { pluginRegistry } from '../plugins/index.js';

export async function buildApp(): Promise<FastifyInstance> {
  const app = Fastify({
    loggerInstance: logger as any,
    disableRequestLogging: true,
  });

  // Configure Zod Validator & Serializer Compilers
  configureZodValidation(app);

  // Register Request Context Decorator & Request Hook
  registerRequestContextDecorator(app);

  // Register Core & Infrastructure Plugins via PluginRegistry
  await pluginRegistry.registerAll(app);

  // Register Global Request Hooks
  registerGlobalHooks(app);

  // Custom 404 Not Found Handler
  app.setNotFoundHandler((request: FastifyRequest, reply: FastifyReply) => {
    const notFoundError = new NotFoundError(`Route ${request.method} ${request.url} not found`);
    const { statusCode, payload } = ErrorFormatter.format(notFoundError, request.requestContext?.requestId || request.id, config.app.isProduction);

    reply.status(statusCode).send(payload);
  });

  // Centralized Global Fastify Error Handler
  app.setErrorHandler((error: Error, request: FastifyRequest, reply: FastifyReply) => {
    const ctx = request.requestContext;
    const reqId = ctx?.requestId || request.id;
    const correlationId = ctx?.correlationId || reqId;
    const { statusCode, payload } = ErrorFormatter.format(error, reqId, config.app.isProduction);

    errorLogger.error(
      {
        reqId,
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

  // Register Core Health Module
  await app.register(healthRoutes);
  await app.register(healthRoutes, { prefix: config.app.apiPrefix });

  // Register Example Feature Module (Canonical Blueprint)
  await app.register(exampleRoutes, { prefix: config.app.apiPrefix });

  // Register Authentication Feature Module
  await app.register(authRoutes, { prefix: config.app.apiPrefix });

  // Register User Feature Module
  await app.register(userRoutes, { prefix: config.app.apiPrefix });

  // Register Leaderboard Feature Module (Ascension Ladder)
  await app.register(leaderboardRoutes, { prefix: config.app.apiPrefix });

  // Register Oracle Feature Module (Autonomous Intelligence Engine)
  await app.register(oracleRoutes, { prefix: config.app.apiPrefix });

  return app;
}
