import { FastifyReply, FastifyRequest } from 'fastify';
import { appLogger } from '../../../../common/logger/index.js';
import { ExampleApplicationService } from '../../application/services/example.application-service.js';
import { ExamplePresentationMapper } from '../dto/example-presentation.dto.js';
import { CreateExampleHttpRequest } from '../requests/create-example.request.js';

export class ExampleController {
  constructor(private readonly exampleApplicationService: ExampleApplicationService) {}

  public createExample = async (
    request: FastifyRequest<{ Body: CreateExampleHttpRequest }>,
    reply: FastifyReply
  ): Promise<void> => {
    const ctx = request.requestContext;
    appLogger.debug({ reqId: ctx?.requestId, correlationId: ctx?.correlationId }, 'Handling CreateExample HTTP request');

    const dto = await this.exampleApplicationService.createExample({
      name: request.body.name,
      description: request.body.description,
    });

    const response = ExamplePresentationMapper.toHttpResponse(dto);
    reply.status(201).send({ success: true, data: response });
  };

  public getExampleById = async (
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply
  ): Promise<void> => {
    const dto = await this.exampleApplicationService.getExampleById(request.params.id);
    const response = ExamplePresentationMapper.toHttpResponse(dto);
    reply.status(200).send({ success: true, data: response });
  };

  public getAllExamples = async (
    _request: FastifyRequest,
    reply: FastifyReply
  ): Promise<void> => {
    const dtos = await this.exampleApplicationService.getAllExamples();
    const responses = dtos.map((dto) => ExamplePresentationMapper.toHttpResponse(dto));
    reply.status(200).send({ success: true, data: responses });
  };
}
