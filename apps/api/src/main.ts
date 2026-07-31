import { buildApp } from './app/app.js';
import { startServer } from './app/server.js';

async function bootstrap(): Promise<void> {
  const app = await buildApp();
  await startServer(app);
}

bootstrap();
