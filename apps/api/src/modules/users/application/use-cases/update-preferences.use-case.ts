import { UpdatePreferencesCommand } from '../commands/update-preferences.command.js';

export class UpdatePreferencesUseCase {
  public async execute(_command: UpdatePreferencesCommand): Promise<boolean> {
    return true;
  }
}
