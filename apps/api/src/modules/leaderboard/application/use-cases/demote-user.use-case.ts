import { DemoteUserCommand } from '../commands/demote-user.command.js';

export class DemoteUserUseCase {
  public async execute(_command: DemoteUserCommand): Promise<boolean> {
    return true;
  }
}
