import { ZodError } from 'zod';
import { mapZodErrorToDetails } from '../validation/validation.error-map.js';
import { ApiErrorDetail, AppError } from './app.error.js';
import { InternalServerError, ValidationError } from './domain.errors.js';

export interface StandardApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: ApiErrorDetail[];
  };
  timestamp: string;
  requestId?: string;
}

export class ErrorFormatter {
  public static format(error: unknown, requestId?: string, isProduction: boolean = false): { statusCode: number; payload: StandardApiErrorResponse } {
    let normalizedError: AppError;

    if (error instanceof AppError) {
      normalizedError = error;
    } else if (error instanceof ZodError) {
      const details = mapZodErrorToDetails(error);
      normalizedError = new ValidationError('Request validation failed', details);
    } else if (error && typeof error === 'object' && 'issues' in error && Array.isArray((error as { issues: unknown[] }).issues)) {
      const details: ApiErrorDetail[] = (error as { issues: Array<{ path?: string[]; message?: string; code?: string }> }).issues.map((issue) => ({
        field: issue.path && issue.path.length > 0 ? issue.path.join('.') : undefined,
        message: issue.message || 'Invalid parameter',
        rule: issue.code,
      }));
      normalizedError = new ValidationError('Request validation failed', details);
    } else if (error && typeof error === 'object' && 'validation' in error && Array.isArray((error as { validation: unknown[] }).validation)) {
      const fastifyValidation = (error as { validation: Array<{ instancePath?: string; message?: string; keyword?: string; params?: { issue?: { path?: string[] } } }> }).validation;
      const details: ApiErrorDetail[] = fastifyValidation.map((item) => ({
        field: item.instancePath || item.params?.issue?.path?.join('.') || item.keyword,
        message: item.message || 'Validation error',
        rule: item.keyword,
      }));
      normalizedError = new ValidationError('Invalid request parameters', details);
    } else {
      const message = isProduction ? 'An unexpected internal error occurred' : (error as Error)?.message || 'Unknown error';
      normalizedError = new InternalServerError(message);
    }

    const payload: StandardApiErrorResponse = {
      success: false,
      error: {
        code: normalizedError.code,
        message: normalizedError.message,
        ...(normalizedError.details && normalizedError.details.length > 0 ? { details: normalizedError.details } : {}),
      },
      timestamp: new Date().toISOString(),
      ...(requestId ? { requestId } : {}),
    };

    return {
      statusCode: normalizedError.statusCode,
      payload,
    };
  }
}
