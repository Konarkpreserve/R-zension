import { ExampleEntity } from '../../domain/entities/example.entity.js';
import { ExampleDto } from '../dto/example.dto.js';

export class ExampleMapper {
  public static toDto(entity: ExampleEntity): ExampleDto {
    return {
      id: entity.getId().getValue(),
      name: entity.getName(),
      description: entity.getDescription(),
      status: entity.getStatus(),
      createdAt: entity.getCreatedAt().toISOString(),
      updatedAt: entity.getUpdatedAt().toISOString(),
    };
  }
}
