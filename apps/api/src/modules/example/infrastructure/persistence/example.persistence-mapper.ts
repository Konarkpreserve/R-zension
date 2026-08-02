import { ExampleEntity } from '../../domain/entities/example.entity.js';
import { ExampleStatus } from '../../domain/enums/example-status.enum.js';
import { ExampleId } from '../../domain/value-objects/example-id.vo.js';

export interface ExampleDbRecord {
  id: string;
  name: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export class ExamplePersistenceMapper {
  public static toDomain(record: ExampleDbRecord): ExampleEntity {
    return new ExampleEntity({
      id: ExampleId.create(record.id),
      name: record.name,
      description: record.description,
      status: record.status as ExampleStatus,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }

  public static toPersistence(entity: ExampleEntity): ExampleDbRecord {
    return {
      id: entity.getId().getValue(),
      name: entity.getName(),
      description: entity.getDescription(),
      status: entity.getStatus(),
      createdAt: entity.getCreatedAt(),
      updatedAt: entity.getUpdatedAt(),
    };
  }
}
