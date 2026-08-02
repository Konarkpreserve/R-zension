import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email('Invalid email address'),
  displayName: z.string().min(2, 'Display name must be at least 2 characters'),
});

export const updateUserSchema = z.object({
  displayName: z.string().min(2).optional(),
  biography: z.string().max(500).optional(),
});

export const updatePreferencesSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']).optional(),
  timezone: z.string().optional(),
  locale: z.string().optional(),
});
