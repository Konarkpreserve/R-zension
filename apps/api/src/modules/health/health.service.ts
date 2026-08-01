import { HealthQuery } from '../../common/validation/index.js';
import { config } from '../../config/index.js';

export interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
  details?: {
    format: string;
    verbose: boolean;
  };
}

export class HealthService {
  public getHealthStatus(query?: HealthQuery): HealthStatus {
    const status: HealthStatus = {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env.nodeEnv,
    };

    if (query?.format === 'full' || query?.verbose) {
      status.details = {
        format: query?.format || 'simple',
        verbose: Boolean(query?.verbose),
      };
    }

    return status;
  }
}
