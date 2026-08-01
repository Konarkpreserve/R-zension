import { PrismaClient } from '@prisma/client';
import { databaseLogger } from '../../common/logger/index.js';
import { createPrismaClient } from './client.js';

export interface DatabaseConnectionStatus {
  isConnected: boolean;
  provider: 'postgresql';
  latencyMs: number | null;
  lastConnectedAt: string | null;
  error: string | null;
}

export class PrismaProvider {
  private client: PrismaClient | null = null;
  private isInitialized = false;
  private connectionStatus: DatabaseConnectionStatus = {
    isConnected: false,
    provider: 'postgresql',
    latencyMs: null,
    lastConnectedAt: null,
    error: null,
  };

  public getClient(): PrismaClient {
    if (!this.client) {
      databaseLogger.info('Initializing Prisma Client infrastructure instance...');
      this.client = createPrismaClient();
      this.isInitialized = true;
    }
    return this.client;
  }

  public isInfrastructureReady(): boolean {
    return this.isInitialized && Boolean(this.client);
  }

  public async verifyConnection(): Promise<DatabaseConnectionStatus> {
    const client = this.getClient();
    const startTime = performance.now();

    try {
      databaseLogger.info('Verifying PostgreSQL database connection via Prisma...');
      await client.$connect();
      await client.$queryRawUnsafe('SELECT 1');
      const duration = performance.now() - startTime;
      const latencyMs = Math.round(duration * 100) / 100;
      const now = new Date().toISOString();

      this.connectionStatus = {
        isConnected: true,
        provider: 'postgresql',
        latencyMs,
        lastConnectedAt: now,
        error: null,
      };

      databaseLogger.info({ latencyMs }, `PostgreSQL connection verified successfully (${latencyMs}ms)`);
      return this.connectionStatus;
    } catch (err) {
      const errorMessage = (err as Error)?.message || 'Database connection failed';
      this.connectionStatus = {
        isConnected: false,
        provider: 'postgresql',
        latencyMs: null,
        lastConnectedAt: this.connectionStatus.lastConnectedAt,
        error: errorMessage,
      };

      databaseLogger.warn({ err: errorMessage }, 'PostgreSQL connection verification check: Database unreachable (Standby mode)');
      return this.connectionStatus;
    }
  }

  public getConnectionStatus(): DatabaseConnectionStatus {
    return this.connectionStatus;
  }

  public async disconnect(): Promise<void> {
    if (this.client) {
      databaseLogger.info('Disconnecting Prisma Client infrastructure...');
      try {
        await this.client.$disconnect();
      } catch (err) {
        databaseLogger.error({ err }, 'Error during Prisma disconnect');
      }
      this.client = null;
      this.isInitialized = false;
      this.connectionStatus.isConnected = false;
    }
  }
}

export const prismaProvider = new PrismaProvider();
