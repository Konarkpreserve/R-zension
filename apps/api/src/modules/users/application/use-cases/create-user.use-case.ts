import { CreateUserCommand } from '../commands/create-user.command.js';
import { UserDto } from '../dto/user.dto.js';

export class CreateUserUseCase {
  public async execute(command: CreateUserCommand): Promise<UserDto> {
    return {
      id: 'placeholder-user-id',
      email: command.email,
      displayName: command.displayName,
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
}
