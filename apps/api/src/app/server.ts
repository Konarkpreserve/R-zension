import { FastifyInstance } from 'fastify';
import { envConfig } from '../config/env.config.js';

export async function startServer(app: FastifyInstance): Promise<void> {
  try {
    const address = await app.listen({
      port: envConfig.PORT,
      host: envConfig.HOST,
    });
    app.log.info(`R-zension API Server listening at ${address}`);
  } catch (err) {
    app.log.error(err, 'Failed to start Fastify server');
    process.exit(1);
  }
}
