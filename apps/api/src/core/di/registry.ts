import { appLogger } from '../../common/logger/index.js';
import { HealthController } from '../../modules/health/health.controller.js';
import { HealthService } from '../../modules/health/health.service.js';
import { container } from './container.js';
import { TOKENS } from './service-token.js';

export function setupContainer(): void {
  appLogger.info('Initializing Dependency Injection container bindings...');

  // Health Module Wiring
  container.register(TOKENS.HealthService, () => new HealthService(), 'singleton');
  container.register(
    TOKENS.HealthController,
    (c) => new HealthController(c.resolve(TOKENS.HealthService)),
    'singleton'
  );
}
