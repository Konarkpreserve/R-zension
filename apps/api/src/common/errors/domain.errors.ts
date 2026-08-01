import { ApiErrorDetail, AppError } from './app.error.js';
import { ErrorCode } from './error-code.enum.js';

export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed', details?: ApiErrorDetail[]) {
    super(message, 400, ErrorCode.VALIDATION_FAILED, details, true);
  }
}

export class AuthenticationError extends AppError {
  constructor(message: string = 'Authentication required') {
    super(message, 401, ErrorCode.UNAUTHORIZED, undefined, true);
  }
}

export class AuthorizationError extends AppError {
  constructor(message: string = 'Insufficient permissions') {
    super(message, 403, ErrorCode.FORBIDDEN, undefined, true);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, ErrorCode.RESOURCE_NOT_FOUND, undefined, true);
  }
}

export class ConflictError extends AppError {
  constructor(message: string = 'Resource conflict detected') {
    super(message, 409, ErrorCode.RESOURCE_CONFLICT, undefined, true);
  }
}

export class RateLimitError extends AppError {
  constructor(message: string = 'Too many requests. Please try again later.') {
    super(message, 429, ErrorCode.RATE_LIMITED, undefined, true);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string = 'An unexpected internal error occurred') {
    super(message, 500, ErrorCode.INTERNAL_SERVER_ERROR, undefined, false);
  }
}

export class ServiceUnavailableError extends AppError {
  constructor(message: string = 'Service is temporarily unavailable') {
    super(message, 503, ErrorCode.SERVICE_UNAVAILABLE, undefined, true);
  }
}

export class DatabaseError extends AppError {
  constructor(message: string = 'Database operation failed') {
    super(message, 500, ErrorCode.DATABASE_ERROR, undefined, false);
  }
}

export class ExternalServiceError extends AppError {
  constructor(message: string = 'External service communication failed') {
    super(message, 502, ErrorCode.EXTERNAL_SERVICE_ERROR, undefined, true);
  }
}

export class AIServiceError extends AppError {
  constructor(message: string = 'AI Service inference failed') {
    super(message, 502, ErrorCode.AI_SERVICE_ERROR, undefined, true);
  }
}
