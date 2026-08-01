import { z } from 'zod';

export const uuidSchema = z.string().uuid({ message: 'Must be a valid UUID v4' });

export const paginationQuerySchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(20),
});

export const searchSchema = z.object({
  q: z.string().trim().min(1).max(100).optional(),
});

export const healthQuerySchema = z.object({
  format: z.enum(['simple', 'full']).optional().default('simple'),
  verbose: z.coerce.boolean().optional().default(false),
});

export type HealthQuery = z.infer<typeof healthQuerySchema>;
export type PaginationQuery = z.infer<typeof paginationQuerySchema>;
