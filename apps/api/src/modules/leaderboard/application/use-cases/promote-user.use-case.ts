import { PromoteUserCommand } from '../commands/promote-user.command.js';

export class PromoteUserUseCase {
  public async execute(_command: PromoteUserCommand): Promise<boolean> {
    return true;
  }
}
