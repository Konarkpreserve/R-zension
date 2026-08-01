import helmet from '@fastify/helmet';
import { FastifyInstance } from 'fastify';
import { AppPlugin } from '../plugin.interface.js';

export const helmetPlugin: AppPlugin = {
  name: 'helmet-plugin',
  group: 'security',
  register: async (app: FastifyInstance): Promise<void> => {
    await app.register(helmet, {
      contentSecurityPolicy: false,
    });
  },
};
