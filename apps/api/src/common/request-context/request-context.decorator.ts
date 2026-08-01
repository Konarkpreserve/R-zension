import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { RequestContextBuilder } from './request-context.builder.js';
import { RequestContext } from './request-context.interface.js';

declare module 'fastify' {
  interface FastifyRequest {
    requestContext: RequestContext;
  }
}

export function registerRequestContextDecorator(app: FastifyInstance): void {
  app.decorateRequest('requestContext', null as any);

  app.addHook('onRequest', async (request: FastifyRequest, reply: FastifyReply) => {
    const context = RequestContextBuilder.build(request);
    request.requestContext = context;

    reply.header('x-correlation-id', context.correlationId);
  });
}
