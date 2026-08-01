import { FastifyInstance } from 'fastify';
import { config } from '../config/index.js';

export async function startServer(app: FastifyInstance): Promise<void> {
  try {
    const address = await app.listen({
      port: config.server.port,
      host: config.server.host,
    });
    app.log.info(`R-zension API Server listening at ${address}`);
  } catch (err) {
    app.log.error(err, 'Failed to start Fastify server');
    process.exit(1);
  }
}
