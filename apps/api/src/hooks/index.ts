import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { httpLogger } from '../common/logger/index.js';

export function registerGlobalHooks(app: FastifyInstance): void {
  app.addHook('onRequest', async (request: FastifyRequest) => {
    const ctx = request.requestContext;
    if (!ctx) return;

    httpLogger.info(
      {
        reqId: ctx.requestId,
        correlationId: ctx.correlationId,
        method: ctx.method,
        url: ctx.path,
        clientIp: ctx.clientIp,
        userAgent: ctx.userAgent,
      },
      `Incoming Request: ${ctx.method} ${ctx.path}`
    );
  });

  app.addHook('onResponse', async (request: FastifyRequest, reply: FastifyReply) => {
    const ctx = request.requestContext;
    if (!ctx) return;

    const durationMs = ctx.getDurationMs();

    httpLogger.info(
      {
        reqId: ctx.requestId,
        correlationId: ctx.correlationId,
        method: ctx.method,
        url: ctx.path,
        statusCode: reply.statusCode,
        durationMs,
      },
      `Request Completed: ${ctx.method} ${ctx.path} - Status ${reply.statusCode} (${durationMs}ms)`
    );
  });
}
