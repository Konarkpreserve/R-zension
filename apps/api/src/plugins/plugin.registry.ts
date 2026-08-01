import { FastifyInstance } from 'fastify';
import { appLogger } from '../common/logger/index.js';
import { sensiblePlugin } from './core/sensible.plugin.js';
import { AppPlugin, PluginGroup } from './plugin.interface.js';
import { corsPlugin } from './security/cors.plugin.js';
import { helmetPlugin } from './security/helmet.plugin.js';

const GROUP_ORDER: PluginGroup[] = [
  'core',
  'security',
  'utility',
  'observability',
  'database',
  'cache',
  'ai',
  'storage',
];

export class PluginRegistry {
  private plugins: AppPlugin[] = [];

  constructor() {
    this.registerPlugin(sensiblePlugin);
    this.registerPlugin(corsPlugin);
    this.registerPlugin(helmetPlugin);
  }

  public registerPlugin(plugin: AppPlugin): void {
    this.plugins.push(plugin);
  }

  public getPluginsInOrder(): AppPlugin[] {
    return [...this.plugins].sort((a, b) => {
      const orderA = GROUP_ORDER.indexOf(a.group);
      const orderB = GROUP_ORDER.indexOf(b.group);
      return orderA - orderB;
    });
  }

  public async registerAll(app: FastifyInstance): Promise<void> {
    const orderedPlugins = this.getPluginsInOrder();

    for (const plugin of orderedPlugins) {
      appLogger.debug({ plugin: plugin.name, group: plugin.group }, `Registering plugin: ${plugin.name} [Group: ${plugin.group}]`);
      await plugin.register(app);
    }
    appLogger.info({ count: orderedPlugins.length }, `Successfully registered ${orderedPlugins.length} infrastructure plugins`);
  }
}

export const pluginRegistry = new PluginRegistry();
