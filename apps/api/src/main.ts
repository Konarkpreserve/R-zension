import { buildApp } from './app/app.js';
import { startServer } from './app/server.js';
import { appLogger, configLogger } from './common/logger/index.js';
import { config } from './config/index.js';
import { setupContainer } from './core/di/index.js';
import { prismaProvider } from './core/prisma/index.js';

async function bootstrap(): Promise<void> {
  configLogger.info({ env: config.env.nodeEnv, port: config.server.port }, 'Configuration loaded and validated');

  setupContainer();

  await prismaProvider.verifyConnection();

  appLogger.info('Initializing Fastify application bootstrap...');

  const app = await buildApp();
  await startServer(app);
}

bootstrap();
