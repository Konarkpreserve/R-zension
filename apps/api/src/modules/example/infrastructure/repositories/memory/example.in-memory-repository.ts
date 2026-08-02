import { ExampleEntity } from '../../../domain/entities/example.entity.js';
import { IExampleRepository } from '../../../domain/interfaces/example-repository.interface.js';
import { ExampleId } from '../../../domain/value-objects/example-id.vo.js';

export class InMemoryExampleRepository implements IExampleRepository {
  private readonly storage = new Map<string, ExampleEntity>();

  public async findById(id: ExampleId): Promise<ExampleEntity | null> {
    return this.storage.get(id.getValue()) || null;
  }

  public async findAll(): Promise<ExampleEntity[]> {
    return Array.from(this.storage.values());
  }

  public async save(entity: ExampleEntity): Promise<ExampleEntity> {
    this.storage.set(entity.getId().getValue(), entity);
    return entity;
  }

  public async delete(id: ExampleId): Promise<boolean> {
    return this.storage.delete(id.getValue());
  }
}
