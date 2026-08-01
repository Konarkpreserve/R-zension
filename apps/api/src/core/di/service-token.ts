export class ServiceToken<T> {
  constructor(public readonly name: string) {}
}

export const TOKENS = {
  HealthService: new ServiceToken<import('../../modules/health/health.service.js').HealthService>('HealthService'),
  HealthController: new ServiceToken<import('../../modules/health/health.controller.js').HealthController>('HealthController'),
} as const;
