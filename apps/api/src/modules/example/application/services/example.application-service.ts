import { ExampleNotFoundException } from '../../domain/exceptions/example-domain.exception.js';
import { IExampleRepository } from '../../domain/interfaces/example-repository.interface.js';
import { ExampleId } from '../../domain/value-objects/example-id.vo.js';
import { CreateExampleCommand } from '../commands/create-example.command.js';
import { ExampleDto } from '../dto/example.dto.js';
import { ExampleMapper } from '../mappers/example.mapper.js';
import { CreateExampleUseCase } from '../use-cases/create-example.use-case.js';

export class ExampleApplicationService {
  private readonly createExampleUseCase: CreateExampleUseCase;

  constructor(private readonly exampleRepository: IExampleRepository) {
    this.createExampleUseCase = new CreateExampleUseCase(exampleRepository);
  }

  public async createExample(command: CreateExampleCommand): Promise<ExampleDto> {
    return this.createExampleUseCase.execute(command);
  }

  public async getExampleById(id: string): Promise<ExampleDto> {
    const exampleId = ExampleId.create(id);
    const entity = await this.exampleRepository.findById(exampleId);
    if (!entity) {
      throw new ExampleNotFoundException(id);
    }
    return ExampleMapper.toDto(entity);
  }

  public async getAllExamples(): Promise<ExampleDto[]> {
    const entities = await this.exampleRepository.findAll();
    return entities.map((entity) => ExampleMapper.toDto(entity));
  }
}
