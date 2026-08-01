import { z } from 'zod';
import { healthQuerySchema } from '../../common/validation/index.js';

export const healthRouteSchema = {
  querystring: healthQuerySchema,
  response: {
    200: z.object({
      status: z.string(),
      timestamp: z.string(),
      uptime: z.number(),
      environment: z.string(),
      details: z
        .object({
          format: z.string(),
          verbose: z.boolean(),
        })
        .optional(),
    }),
  },
};
