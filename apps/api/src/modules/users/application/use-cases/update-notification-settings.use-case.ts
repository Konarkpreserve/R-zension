import { UpdateNotificationsCommand } from '../commands/update-notifications.command.js';

export class UpdateNotificationSettingsUseCase {
  public async execute(_command: UpdateNotificationsCommand): Promise<boolean> {
    return true;
  }
}
