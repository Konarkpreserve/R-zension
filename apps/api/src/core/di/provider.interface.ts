import { ServiceToken } from './service-token.js';

export type Lifetime = 'singleton' | 'transient';

export interface ContainerInterface {
  register<T>(token: ServiceToken<T>, factory: (container: ContainerInterface) => T, lifetime?: Lifetime): void;
  resolve<T>(token: ServiceToken<T>): T;
  has<T>(token: ServiceToken<T>): boolean;
}

export interface FactoryProvider<T> {
  token: ServiceToken<T>;
  factory: (container: ContainerInterface) => T;
  lifetime: Lifetime;
}
