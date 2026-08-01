import { HealthQuery } from '../../common/validation/index.js';
import { IHealthRepository } from '../../core/repositories/index.js';

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
  constructor(private readonly healthRepository: IHealthRepository) {}

  public async getHealthStatus(query?: HealthQuery): Promise<HealthStatus> {
    const record = await this.healthRepository.getSystemHealthStatus();

    const status: HealthStatus = {
      status: record.status,
      timestamp: record.timestamp,
      uptime: record.uptime,
      environment: record.environment,
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
