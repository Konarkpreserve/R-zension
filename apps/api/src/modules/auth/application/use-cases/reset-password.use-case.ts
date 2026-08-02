import { ResetPasswordCommand } from '../commands/reset-password.command.js';

export class ResetPasswordUseCase {
  public async execute(_command: ResetPasswordCommand): Promise<boolean> {
    return true;
  }
}
