export interface SystemHealthCheckRecord {
  id: string;
  status: string;
  timestamp: string;
  uptime: number;
  environment: string;
  prismaInfrastructure?: string;
}

export interface IHealthRepository {
  getSystemHealthStatus(): Promise<SystemHealthCheckRecord>;
}
