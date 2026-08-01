import { randomUUID } from 'node:crypto';
import { FastifyRequest } from 'fastify';
import { config } from '../../config/index.js';
import { RequestContext } from './request-context.interface.js';

export class RequestContextBuilder {
  public static build(request: FastifyRequest): RequestContext {
    const startTimeMs = performance.now();
    const timestamp = new Date().toISOString();

    const existingCorrelationId =
      (request.headers['x-correlation-id'] as string) ||
      (request.headers['x-request-id'] as string);
    const correlationId = existingCorrelationId || randomUUID();
    const requestId = request.id || randomUUID();

    const clientIp =
      (request.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      request.ip ||
      '127.0.0.1';

    const userAgent = request.headers['user-agent'] || 'unknown';
    const method = request.method;
    const path = request.url;

    const requestContext: RequestContext = {
      requestId,
      correlationId,
      startTimeMs,
      timestamp,
      environment: config.env.nodeEnv,
      apiVersion: config.app.apiPrefix,
      method,
      path,
      clientIp,
      userAgent,
      getDurationMs: () => {
        const duration = performance.now() - startTimeMs;
        return Math.round(duration * 100) / 100;
      },
      user: undefined,
      userId: undefined,
      roles: undefined,
      permissions: undefined,
      organizationId: undefined,
      locale: (request.headers['accept-language'] as string) || undefined,
      timezone: (request.headers['x-timezone'] as string) || undefined,
      sessionId: undefined,
    };

    return Object.freeze(requestContext);
  }
}
