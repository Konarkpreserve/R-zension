import dotenv from 'dotenv';
import { Config } from './config.interface.js';
import { envSchema } from './env.schema.js';

function loadEnvFiles(): void {
  dotenv.config();
}

export function loadConfig(): Config {
  loadEnvFiles();

  const parseResult = envSchema.safeParse(process.env);

  if (!parseResult.success) {
    console.error('\n❌ CRITICAL CONFIGURATION ERROR: Invalid environment variables detected!\n');
    const formattedErrors = parseResult.error.format();
    for (const [key, value] of Object.entries(formattedErrors)) {
      if (key !== '_errors' && value && typeof value === 'object' && '_errors' in value && Array.isArray((value as { _errors: string[] })._errors) && (value as { _errors: string[] })._errors.length > 0) {
        console.error(`  - ${key}: ${(value as { _errors: string[] })._errors.join(', ')}`);
      }
    }
    console.error('\nApplication startup aborted due to configuration errors.\n');
    process.exit(1);
  }

  const env = parseResult.data;

  const config: Config = {
    app: {
      name: '@r-zension/api',
      version: '0.1.0',
      apiPrefix: env.API_PREFIX,
      isDevelopment: env.NODE_ENV === 'development',
      isProduction: env.NODE_ENV === 'production',
      isTest: env.NODE_ENV === 'test',
    },
    server: {
      port: env.PORT,
      host: env.HOST,
    },
    env: {
      nodeEnv: env.NODE_ENV,
    },
    logging: {
      level: env.LOG_LEVEL,
    },
    database: {
      url: env.DATABASE_URL,
    },
    aiService: {
      url: env.AI_SERVICE_URL,
    },
    security: {
      jwtSecret: env.JWT_SECRET,
      jwtExpiresIn: env.JWT_EXPIRES_IN,
    },
    cors: {
      origin: env.CORS_ORIGIN,
    },
    email: {
      host: env.SMTP_HOST,
      port: env.SMTP_PORT,
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
    storage: {
      provider: env.STORAGE_PROVIDER,
      bucket: env.STORAGE_BUCKET,
    },
  };

  return Object.freeze(config);
}
