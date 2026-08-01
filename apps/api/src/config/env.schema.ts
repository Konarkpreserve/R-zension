import { z } from 'zod';

export const envSchema = z.object({
  // Environment & Server
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PORT: z
    .coerce
    .number()
    .int()
    .min(1)
    .max(65535)
    .default(4000),
  HOST: z.string().min(1).default('0.0.0.0'),
  API_PREFIX: z
    .string()
    .startsWith('/')
    .default('/api/v1'),

  // Logging & CORS
  LOG_LEVEL: z
    .enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace', 'silent'])
    .default('info'),
  CORS_ORIGIN: z.string().default('*'),

  // Database (Placeholder Config)
  DATABASE_URL: z
    .string()
    .min(1)
    .default('postgresql://postgres:postgres@localhost:5432/rzension_db?schema=public'),

  // AI Service (Placeholder Config)
  AI_SERVICE_URL: z
    .string()
    .min(1)
    .default('http://localhost:8000'),

  // Security (Placeholder Config)
  JWT_SECRET: z
    .string()
    .min(32, 'JWT_SECRET must be at least 32 characters long')
    .default('rzension_jwt_secret_development_placeholder_key_min32chars'),
  JWT_EXPIRES_IN: z.string().default('1d'),

  // Email (Placeholder Config)
  SMTP_HOST: z.string().default('smtp.example.com'),
  SMTP_PORT: z.coerce.number().int().default(587),
  SMTP_USER: z.string().default('user@example.com'),
  SMTP_PASS: z.string().default('password'),

  // Storage (Placeholder Config)
  STORAGE_PROVIDER: z.enum(['local', 's3', 'gcs']).default('local'),
  STORAGE_BUCKET: z.string().default('rzension-storage'),
});

export type EnvSchemaType = z.infer<typeof envSchema>;
