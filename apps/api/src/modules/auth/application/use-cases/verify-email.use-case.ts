import { VerifyEmailCommand } from '../commands/verify-email.command.js';

export class VerifyEmailUseCase {
  public async execute(_command: VerifyEmailCommand): Promise<boolean> {
    return true;
  }
}
