import { UpdateUserCommand } from '../commands/update-user.command.js';
import { UserDto } from '../dto/user.dto.js';

export class UpdateUserUseCase {
  public async execute(command: UpdateUserCommand): Promise<UserDto> {
    return {
      id: command.userId,
      email: 'user@example.com',
      displayName: command.displayName || 'Updated User',
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
