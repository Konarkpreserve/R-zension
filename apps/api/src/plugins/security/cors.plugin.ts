import cors from '@fastify/cors';
import { FastifyInstance } from 'fastify';
import { config } from '../../config/index.js';
import { AppPlugin } from '../plugin.interface.js';

export const corsPlugin: AppPlugin = {
  name: 'cors-plugin',
  group: 'security',
  register: async (app: FastifyInstance): Promise<void> => {
    await app.register(cors, {
      origin: config.cors.origin === '*' ? true : config.cors.origin,
      credentials: true,
    });
  },
};
