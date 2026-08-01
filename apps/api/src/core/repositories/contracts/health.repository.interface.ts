export interface SystemHealthCheckRecord {
  id: string;
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
}

export interface IHealthRepository {
  getSystemHealthStatus(): Promise<SystemHealthCheckRecord>;
}
