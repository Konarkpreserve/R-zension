import { ContainerInterface, FactoryProvider, Lifetime } from './provider.interface.js';
import { ServiceToken } from './service-token.js';

export class Container implements ContainerInterface {
  private providers = new Map<string, FactoryProvider<any>>();
  private singletons = new Map<string, any>();

  public register<T>(
    token: ServiceToken<T>,
    factory: (container: ContainerInterface) => T,
    lifetime: Lifetime = 'singleton'
  ): void {
    this.providers.set(token.name, { token, factory, lifetime });
  }

  public resolve<T>(token: ServiceToken<T>): T {
    const provider = this.providers.get(token.name);

    if (!provider) {
      throw new Error(`[DI Container] Service not registered for token: '${token.name}'`);
    }

    if (provider.lifetime === 'singleton') {
      if (!this.singletons.has(token.name)) {
        const instance = provider.factory(this);
        this.singletons.set(token.name, instance);
      }
      return this.singletons.get(token.name);
    }

    return provider.factory(this);
  }

  public has<T>(token: ServiceToken<T>): boolean {
    return this.providers.has(token.name);
  }

  public clear(): void {
    this.providers.clear();
    this.singletons.clear();
  }
}

export const container = new Container();
