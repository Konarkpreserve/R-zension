import { UserEntity } from '../../domain/entities/user.entity.js';
import { UserDto } from '../dto/user.dto.js';

export class UserMapper {
  public static toDto(entity: UserEntity): UserDto {
    return {
      id: entity.getId(),
      email: entity.getEmail().value,
      displayName: entity.getProfile().displayName.value,
      status: entity.getStatus(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
