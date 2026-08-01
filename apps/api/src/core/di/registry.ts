import { appLogger } from '../../common/logger/index.js';
import { HealthController } from '../../modules/health/health.controller.js';
import { InMemoryHealthRepository } from '../../modules/health/health.repository.in-memory.js';
import { HealthService } from '../../modules/health/health.service.js';
import { REPO_TOKENS } from '../repositories/tokens/repository.tokens.js';
import { container } from './container.js';
import { TOKENS } from './service-token.js';

export function setupContainer(): void {
  appLogger.info('Initializing Dependency Injection container & repository bindings...');

  // Health Repository Registration
  container.register(REPO_TOKENS.HealthRepository, () => new InMemoryHealthRepository(), 'singleton');

  // Health Module Wiring
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
}
