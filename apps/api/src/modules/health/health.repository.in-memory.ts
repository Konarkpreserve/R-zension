import { config } from '../../config/index.js';
import { IHealthRepository, SystemHealthCheckRecord } from '../../core/repositories/index.js';

export class InMemoryHealthRepository implements IHealthRepository {
  public async getSystemHealthStatus(): Promise<SystemHealthCheckRecord> {
    return {
      id: 'system-health-check',
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env.nodeEnv,
    };
  }
}
