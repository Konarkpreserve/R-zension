import { PrismaClient } from '@prisma/client';
import { ExampleEntity } from '../../../domain/entities/example.entity.js';
import { IExampleRepository } from '../../../domain/interfaces/example-repository.interface.js';
import { ExampleId } from '../../../domain/value-objects/example-id.vo.js';

export class PrismaExampleRepository implements IExampleRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findById(id: ExampleId): Promise<ExampleEntity | null> {
    return null;
  }

  public async findAll(): Promise<ExampleEntity[]> {
    return [];
  }

  public async save(entity: ExampleEntity): Promise<ExampleEntity> {
    return entity;
  }

  public async delete(id: ExampleId): Promise<boolean> {
    return true;
  }
}
