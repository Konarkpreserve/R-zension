import { PrismaClient } from '@prisma/client';
import { databaseLogger } from '../../common/logger/index.js';
import { createPrismaClient } from './client.js';

export class PrismaProvider {
  private client: PrismaClient | null = null;
  private isInitialized = false;

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

  public async disconnect(): Promise<void> {
    if (this.client) {
      databaseLogger.info('Disconnecting Prisma Client infrastructure...');
      await this.client.$disconnect();
      this.client = null;
      this.isInitialized = false;
    }
  }
}

export const prismaProvider = new PrismaProvider();
