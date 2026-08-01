import { Logger } from 'pino';

export interface LogContext {
  service?: string;
  env?: string;
  module?: string;
  reqId?: string;
  correlationId?: string;
  method?: string;
  url?: string;
  statusCode?: number;
  durationMs?: number;
  err?: Error;
  [key: string]: unknown;
}

export interface DomainLoggers {
  root: Logger;
  app: Logger;
  http: Logger;
  config: Logger;
  error: Logger;
  health: Logger;
  database: Logger;
  aiService: Logger;
  auth: Logger;
}
