import { loadConfig } from './config.loader.js';

export const config = loadConfig();

export * from './config.interface.js';
export * from './env.schema.js';
