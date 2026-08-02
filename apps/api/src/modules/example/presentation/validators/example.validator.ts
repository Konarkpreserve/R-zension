import { z } from 'zod';

export const createExampleSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  description: z.string().min(5, 'Description must be at least 5 characters').max(500),
});

export const getExampleParamsSchema = z.object({
  id: z.string().uuid('ID must be a valid UUID v4'),
});
