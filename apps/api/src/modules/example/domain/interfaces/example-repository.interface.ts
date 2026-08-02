import { ExampleEntity } from '../entities/example.entity.js';
import { ExampleId } from '../value-objects/example-id.vo.js';

export interface IExampleRepository {
  findById(id: ExampleId): Promise<ExampleEntity | null>;
  findAll(): Promise<ExampleEntity[]>;
  save(entity: ExampleEntity): Promise<ExampleEntity>;
  delete(id: ExampleId): Promise<boolean>;
}
