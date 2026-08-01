import { FastifyInstance } from 'fastify';
import { appLogger } from '../common/logger/index.js';
import { config } from '../config/index.js';
import { prismaProvider } from '../core/prisma/index.js';

export async function startServer(app: FastifyInstance): Promise<void> {
  try {
    const address = await app.listen({
      port: config.server.port,
      host: config.server.host,
    });
    appLogger.info({ address, port: config.server.port, host: config.server.host }, `R-zension API Server listening at ${address}`);

    const handleShutdown = (signal: string) => {
      appLogger.info({ signal }, `Received ${signal} signal. Initiating graceful shutdown...`);

      app.close().then(async () => {
        await prismaProvider.disconnect();
        appLogger.info({ signal }, 'Fastify server and infrastructure closed cleanly. Process exiting.');
        process.exit(0);
      });
    };

    process.on('SIGINT', () => handleShutdown('SIGINT'));
    process.on('SIGTERM', () => handleShutdown('SIGTERM'));
  } catch (err) {
    appLogger.error({ err }, 'Failed to start Fastify server');
    process.exit(1);
  }
}
