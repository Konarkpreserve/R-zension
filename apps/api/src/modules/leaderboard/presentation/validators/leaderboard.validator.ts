import { z } from 'zod';

export const getLeaderboardSchema = z.object({
  seasonId: z.string().optional(),
  limit: z.coerce.number().min(1).max(100).default(20),
  offset: z.coerce.number().min(0).default(0),
});

export const calculateRankSchema = z.object({
  userId: z.string().uuid(),
  scoreDelta: z.number(),
});
