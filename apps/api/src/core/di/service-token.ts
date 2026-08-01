import { PrismaClient } from '@prisma/client';
import { PrismaProvider } from '../prisma/prisma.provider.js';

export class ServiceToken<T> {
  constructor(public readonly name: string) {}
}

export const TOKENS = {
  HealthService: new ServiceToken<import('../../modules/health/health.service.js').HealthService>('HealthService'),
  HealthController: new ServiceToken<import('../../modules/health/health.controller.js').HealthController>('HealthController'),
  PrismaClient: new ServiceToken<PrismaClient>('PrismaClient'),
  PrismaProvider: new ServiceToken<PrismaProvider>('PrismaProvider'),
} as const;
