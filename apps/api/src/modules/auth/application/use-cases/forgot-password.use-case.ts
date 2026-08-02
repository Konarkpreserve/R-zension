import { ForgotPasswordCommand } from '../commands/forgot-password.command.js';

export class ForgotPasswordUseCase {
  public async execute(_command: ForgotPasswordCommand): Promise<boolean> {
    return true;
  }
}
