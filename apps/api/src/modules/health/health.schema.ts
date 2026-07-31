export const healthCheckSchema = {
  description: 'Backend health check endpoint',
  tags: ['Health'],
  response: {
    200: {
      type: 'object',
      properties: {
        status: { type: 'string' },
        timestamp: { type: 'string' },
        uptime: { type: 'number' },
        environment: { type: 'string' },
      },
    },
  },
};
