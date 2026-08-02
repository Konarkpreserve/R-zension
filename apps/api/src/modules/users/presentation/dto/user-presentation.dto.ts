import { UserDto } from '../../application/dto/user.dto.js';
import { UserHttpResponse } from '../responses/user.response.js';

export class UserPresentationMapper {
  public static toResponse(dto: UserDto): UserHttpResponse {
    return {
      id: dto.id,
      email: dto.email,
      displayName: dto.displayName,
      avatarUrl: dto.avatarUrl,
      status: dto.status,
      createdAt: dto.createdAt,
      updatedAt: dto.updatedAt,
    };
  }
}
