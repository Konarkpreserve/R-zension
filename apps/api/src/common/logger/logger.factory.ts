import pino, { Logger, LoggerOptions } from 'pino';
import { config } from '../../config/index.js';

export function createPinoLogger(): Logger {
  const isDevelopment = config.app.isDevelopment;

  const loggerOptions: LoggerOptions = {
    level: config.logging.level,
    base: {
      service: config.app.name,
      env: config.env.nodeEnv,
    },
    timestamp: pino.stdTimeFunctions.isoTime,
    formatters: {
      level(label) {
        return { level: label };
      },
    },
  };

  if (isDevelopment) {
    loggerOptions.transport = {
      target: 'pino-pretty',
      options: {
        colorize: true,
        translateTime: 'SYS:yyyy-mm-dd HH:MM:ss.l',
        ignore: 'pid,hostname,service,env',
        singleLine: false,
      },
    };
  }

  return pino(loggerOptions);
}
