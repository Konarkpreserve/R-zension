export interface AppConfig {
  name: string;
  version: string;
  apiPrefix: string;
  isDevelopment: boolean;
  isProduction: boolean;
  isTest: boolean;
}

export interface ServerConfig {
  port: number;
  host: string;
}

export interface EnvConfig {
  nodeEnv: 'development' | 'production' | 'test';
}

export interface LoggingConfig {
  level: string;
}

export interface DatabaseConfig {
  url: string;
}

export interface AIServiceConfig {
  url: string;
}

export interface SecurityConfig {
  jwtSecret: string;
  jwtExpiresIn: string;
}

export interface CorsConfig {
  origin: string;
}

export interface EmailConfig {
  host: string;
  port: number;
  user: string;
  pass: string;
}

export interface StorageConfig {
  provider: 'local' | 's3' | 'gcs';
  bucket: string;
}

export interface Config {
  app: AppConfig;
  server: ServerConfig;
  env: EnvConfig;
  logging: LoggingConfig;
  database: DatabaseConfig;
  aiService: AIServiceConfig;
  security: SecurityConfig;
  cors: CorsConfig;
  email: EmailConfig;
  storage: StorageConfig;
}
