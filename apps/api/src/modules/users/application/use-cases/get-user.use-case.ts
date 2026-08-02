import { UserDto } from '../dto/user.dto.js';
import { GetUserQuery } from '../queries/get-user.query.js';

export class GetUserUseCase {
  public async execute(query: GetUserQuery): Promise<UserDto> {
    return {
      id: query.userId,
      email: 'user@example.com',
      displayName: 'Placeholder User',
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
