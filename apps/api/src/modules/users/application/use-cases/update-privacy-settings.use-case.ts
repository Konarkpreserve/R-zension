import { UpdatePrivacyCommand } from '../commands/update-privacy.command.js';

export class UpdatePrivacySettingsUseCase {
  public async execute(_command: UpdatePrivacyCommand): Promise<boolean> {
    return true;
  }
}
