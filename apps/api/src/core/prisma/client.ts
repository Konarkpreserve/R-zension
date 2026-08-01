import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import pg from 'pg';
import { databaseLogger } from '../../common/logger/index.js';
import { config } from '../../config/index.js';

export function createPrismaClient(): PrismaClient {
  const isDevelopment = config.app.isDevelopment;

  const pool = new pg.Pool({ connectionString: config.database.url });
  const adapter = new PrismaPg(pool);

  const prisma = new PrismaClient({
    adapter,
    log: isDevelopment
      ? [
          { emit: 'event', level: 'query' },
          { emit: 'event', level: 'error' },
          { emit: 'event', level: 'warn' },
          { emit: 'event', level: 'info' },
        ]
      : [
          { emit: 'event', level: 'error' },
          { emit: 'event', level: 'warn' },
        ],
  });

  (prisma as any).$on?.('query', (e: { query: string; params: string; duration: number }) => {
    databaseLogger.debug({ query: e.query, params: e.params, durationMs: e.duration }, 'Prisma Query Executed');
  });

  (prisma as any).$on?.('error', (e: { message: string }) => {
    databaseLogger.error({ message: e.message }, 'Prisma Database Error');
  });

  (prisma as any).$on?.('warn', (e: { message: string }) => {
    databaseLogger.warn({ message: e.message }, 'Prisma Database Warning');
  });

  (prisma as any).$on?.('info', (e: { message: string }) => {
    databaseLogger.info({ message: e.message }, 'Prisma Database Info');
  });

  return prisma;
}
