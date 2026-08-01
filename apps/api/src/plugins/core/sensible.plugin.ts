import sensible from '@fastify/sensible';
import { FastifyInstance } from 'fastify';
import { AppPlugin } from '../plugin.interface.js';

export const sensiblePlugin: AppPlugin = {
  name: 'sensible-plugin',
  group: 'core',
  register: async (app: FastifyInstance): Promise<void> => {
    await app.register(sensible);
  },
};
