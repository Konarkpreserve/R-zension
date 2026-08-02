import { ExampleDto } from '../../application/dto/example.dto.js';
import { ExampleHttpResponse } from '../responses/example.response.js';

export class ExamplePresentationMapper {
  public static toHttpResponse(dto: ExampleDto): ExampleHttpResponse {
    return {
      id: dto.id,
      name: dto.name,
      description: dto.description,
      status: dto.status,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
