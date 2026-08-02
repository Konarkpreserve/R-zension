import { z } from 'zod';

export const analyzePerformanceSchema = z.object({
  userId: z.string().uuid(),
  timeframeDays: z.coerce.number().min(1).max(365).default(30),
});

export const generateReportSchema = z.object({
  userId: z.string().uuid(),
  reportType: z.enum(['WEEKLY', 'MONTHLY']),
});
