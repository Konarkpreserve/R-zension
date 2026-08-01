import { FastifyInstance } from 'fastify';

export type PluginGroup =
  | 'core'
  | 'security'
  | 'utility'
  | 'observability'
  | 'database'
  | 'cache'
  | 'ai'
  | 'storage';

export interface AppPlugin {
  name: string;
  group: PluginGroup;
  register: (app: FastifyInstance) => Promise<void>;
}
