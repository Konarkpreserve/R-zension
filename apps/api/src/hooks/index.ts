import { FastifyInstance } from 'fastify';

export function registerGlobalHooks(app: FastifyInstance): void {
  app.addHook('onRequest', async (request) => {
    request.log.info({ url: request.url, method: request.method }, 'Incoming HTTP Request');
  });
}
