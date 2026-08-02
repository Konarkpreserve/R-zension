import { ExampleEntity } from '../../domain/entities/example.entity.js';
import { IExampleRepository } from '../../domain/interfaces/example-repository.interface.js';
import { CreateExampleCommand } from '../commands/create-example.command.js';
import { ExampleDto } from '../dto/example.dto.js';
import { ExampleMapper } from '../mappers/example.mapper.js';

export class CreateExampleUseCase {
  constructor(private readonly exampleRepository: IExampleRepository) {}

  public async execute(command: CreateExampleCommand): Promise<ExampleDto> {
    const entity = new ExampleEntity({
      name: command.name,
      description: command.description,
    });

    const savedEntity = await this.exampleRepository.save(entity);
    return ExampleMapper.toDto(savedEntity);
  }
}
