import { randomUUID } from 'node:crypto';
import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { httpLogger } from '../common/logger/index.js';

export function registerGlobalHooks(app: FastifyInstance): void {
  app.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    const existingCorrelationId = (request.headers['x-correlation-id'] as string) || (request.headers['x-request-id'] as string);
    const correlationId = existingCorrelationId || randomUUID();

    (request as FastifyRequest & { correlationId?: string }).correlationId = correlationId;
    reply.header('x-correlation-id', correlationId);

    httpLogger.info(
      {
        reqId: request.id,
        correlationId,
        method: request.method,
        url: request.url,
      },
      `Incoming Request: ${request.method} ${request.url}`
    );
  });

  app.addHook('onResponse', async (request: FastifyRequest, reply: FastifyReply) => {
    const correlationId = (request as FastifyRequest & { correlationId?: string }).correlationId || request.id;
    const responseTime = reply.elapsedTime;

    httpLogger.info(
      {
        reqId: request.id,
        correlationId,
        method: request.method,
        url: request.url,
        statusCode: reply.statusCode,
        responseTimeMs: Math.round(responseTime * 100) / 100,
      },
      `Request Completed: ${request.method} ${request.url} - Status ${reply.statusCode} (${Math.round(responseTime)}ms)`
    );
  });
}
