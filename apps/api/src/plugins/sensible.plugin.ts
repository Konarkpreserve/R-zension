import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import sensible from '@fastify/sensible';
import { FastifyInstance } from 'fastify';

export async function registerCorePlugins(app: FastifyInstance): Promise<void> {
  await app.register(sensible);
  await app.register(cors, {
    origin: true,
    credentials: true,
  });
  await app.register(helmet, {
    contentSecurityPolicy: false,
  });
}
