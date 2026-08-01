import { config } from '../../config/index.js';

export interface HealthStatus {
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
}

export class HealthService {
  public getHealthStatus(): HealthStatus {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      environment: config.env.nodeEnv,
    };
  }
}
