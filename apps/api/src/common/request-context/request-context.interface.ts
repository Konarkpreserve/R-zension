export interface UserContextPlaceholder {
  userId?: string;
  email?: string;
  roles?: string[];
  permissions?: string[];
  sessionId?: string;
  organizationId?: string;
}

export interface RequestContext {
  // Active Telemetry & Traceability
  requestId: string;
  correlationId: string;
  startTimeMs: number;
  timestamp: string;
  environment: string;
  apiVersion: string;

  // HTTP Request Metadata
  method: string;
  path: string;
  clientIp: string;
  userAgent: string;

  // Dynamic Duration Helper
  getDurationMs: () => number;

  // Future Identity & Multi-Tenancy Placeholders (Unauthenticated for now)
  user?: UserContextPlaceholder;
  userId?: string;
  roles?: string[];
  permissions?: string[];
  organizationId?: string;
  locale?: string;
  timezone?: string;
  sessionId?: string;
}
