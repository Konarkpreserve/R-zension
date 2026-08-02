import { appLogger } from '../../common/logger/index.js';
import { AuthApplicationService } from '../../modules/auth/application/services/auth.application-service.js';
import { AUTH_TOKENS } from '../../modules/auth/contracts/auth-module.contract.js';
import { InMemoryAuthSessionRepository } from '../../modules/auth/infrastructure/repositories/memory/auth-session.in-memory-repository.js';
import { AuthController } from '../../modules/auth/presentation/controllers/auth.controller.js';
import { ExampleApplicationService } from '../../modules/example/application/services/example.application-service.js';
import { EXAMPLE_TOKENS } from '../../modules/example/contracts/example-module.contract.js';
import { InMemoryExampleRepository } from '../../modules/example/infrastructure/repositories/memory/example.in-memory-repository.js';
import { ExampleController } from '../../modules/example/presentation/controllers/example.controller.js';
import { HealthController } from '../../modules/health/health.controller.js';
import { InMemoryHealthRepository } from '../../modules/health/health.repository.in-memory.js';
import { HealthService } from '../../modules/health/health.service.js';
import { prismaProvider } from '../prisma/prisma.provider.js';
import { REPO_TOKENS } from '../repositories/tokens/repository.tokens.js';
import { container } from './container.js';
import { TOKENS } from './service-token.js';

export function setupContainer(): void {
  appLogger.info('Initializing Dependency Injection container & infrastructure bindings...');

  // Prisma Infrastructure Registration
  container.register(TOKENS.PrismaProvider, () => prismaProvider, 'singleton');
  container.register(TOKENS.PrismaClient, (c) => c.resolve(TOKENS.PrismaProvider).getClient(), 'singleton');

  // Health Repository & Service Registration
  container.register(REPO_TOKENS.HealthRepository, () => new InMemoryHealthRepository(), 'singleton');
  container.register(
    TOKENS.HealthService,
    (c) => new HealthService(c.resolve(REPO_TOKENS.HealthRepository)),
    'singleton'
  );
  container.register(
    TOKENS.HealthController,
    (c) => new HealthController(c.resolve(TOKENS.HealthService)),
    'singleton'
  );

  // Example Module Blueprint Registration
  container.register(EXAMPLE_TOKENS.ExampleRepository, () => new InMemoryExampleRepository(), 'singleton');
  container.register(
    EXAMPLE_TOKENS.ExampleApplicationService,
    (c) => new ExampleApplicationService(c.resolve(EXAMPLE_TOKENS.ExampleRepository)),
    'singleton'
  );
  container.register(
    EXAMPLE_TOKENS.ExampleController,
    (c) => new ExampleController(c.resolve(EXAMPLE_TOKENS.ExampleApplicationService)),
    'singleton'
  );

  // Auth Feature Module Registration
  container.register(AUTH_TOKENS.AuthSessionRepository, () => new InMemoryAuthSessionRepository(), 'singleton');
  container.register(
    AUTH_TOKENS.AuthApplicationService,
    () => new AuthApplicationService(),
    'singleton'
  );
  container.register(
    AUTH_TOKENS.AuthController,
    (c) => new AuthController(c.resolve(AUTH_TOKENS.AuthApplicationService)),
    'singleton'
  );
}
