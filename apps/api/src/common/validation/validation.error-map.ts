import { ZodError, ZodIssue } from 'zod';
import { ApiErrorDetail } from '../errors/app.error.js';

export function mapZodIssuesToDetails(issues: ZodIssue[]): ApiErrorDetail[] {
  return issues.map((issue) => ({
    field: issue.path.length > 0 ? issue.path.join('.') : undefined,
    message: issue.message,
    rule: issue.code,
  }));
}

export function mapZodErrorToDetails(error: ZodError): ApiErrorDetail[] {
  return mapZodIssuesToDetails(error.issues);
}
