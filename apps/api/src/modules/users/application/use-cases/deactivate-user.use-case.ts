import { DeactivateUserCommand } from '../commands/deactivate-user.command.js';

export class DeactivateUserUseCase {
  public async execute(_command: DeactivateUserCommand): Promise<boolean> {
    return true;
  }
}
