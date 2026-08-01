import { ServiceToken } from '../../di/service-token.js';
import { IHealthRepository } from '../contracts/health.repository.interface.js';

export const REPO_TOKENS = {
  HealthRepository: new ServiceToken<IHealthRepository>('HealthRepository'),
} as const;
