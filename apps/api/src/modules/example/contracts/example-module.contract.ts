import { ServiceToken } from '../../../core/di/service-token.js';
import { ExampleApplicationService } from '../application/services/example.application-service.js';
import { IExampleRepository } from '../domain/interfaces/example-repository.interface.js';
import { ExampleController } from '../presentation/controllers/example.controller.js';

export const EXAMPLE_TOKENS = {
  ExampleRepository: new ServiceToken<IExampleRepository>('ExampleRepository'),
  ExampleApplicationService: new ServiceToken<ExampleApplicationService>('ExampleApplicationService'),
  ExampleController: new ServiceToken<ExampleController>('ExampleController'),
} as const;

export interface IExampleModuleContract {
  getExampleById(id: string): Promise<import('../application/dto/example.dto.js').ExampleDto>;
}
