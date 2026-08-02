import { FastifyInstance } from 'fastify';
import { container } from '../../../../core/di/container.js';
import { EXAMPLE_TOKENS } from '../../contracts/example-module.contract.js';
import { createExampleSchema, getExampleParamsSchema } from '../validators/example.validator.js';

export async function exampleRoutes(app: FastifyInstance): Promise<void> {
  const exampleController = container.resolve(EXAMPLE_TOKENS.ExampleController);

  app.get('/examples', exampleController.getAllExamples);

  app.post(
    '/examples',
    {
      schema: {
        body: createExampleSchema,
      },
    },
    exampleController.createExample
  );

  app.get(
    '/examples/:id',
    {
      schema: {
        params: getExampleParamsSchema,
      },
    },
    exampleController.getExampleById
  );
}
