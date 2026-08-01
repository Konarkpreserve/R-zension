import { createPinoLogger } from './logger.factory.js';
import { DomainLoggers } from './logger.interface.js';

export const logger = createPinoLogger();

export const domainLoggers: DomainLoggers = {
  root: logger,
  app: logger.child({ module: 'Application' }),
  http: logger.child({ module: 'HTTP' }),
  config: logger.child({ module: 'Configuration' }),
  error: logger.child({ module: 'Error' }),
  health: logger.child({ module: 'Health' }),
  database: logger.child({ module: 'Database' }),
  aiService: logger.child({ module: 'AIService' }),
  auth: logger.child({ module: 'Authentication' }),
};

export const {
  app: appLogger,
  http: httpLogger,
  config: configLogger,
  error: errorLogger,
  health: healthLogger,
  database: databaseLogger,
  aiService: aiServiceLogger,
  auth: authLogger,
} = domainLoggers;
