import { CreateUserCommand } from '../commands/create-user.command.js';
import { DeactivateUserCommand } from '../commands/deactivate-user.command.js';
import { UpdateNotificationsCommand } from '../commands/update-notifications.command.js';
import { UpdatePreferencesCommand } from '../commands/update-preferences.command.js';
import { UpdatePrivacyCommand } from '../commands/update-privacy.command.js';
import { UpdateUserCommand } from '../commands/update-user.command.js';
import { UploadAvatarCommand } from '../commands/upload-avatar.command.js';
import { UserProfileDto } from '../dto/user-profile.dto.js';
import { UserDto } from '../dto/user.dto.js';
import { GetPublicProfileQuery } from '../queries/get-public-profile.query.js';
import { GetUserDashboardQuery } from '../queries/get-user-dashboard.query.js';
import { GetUserQuery } from '../queries/get-user.query.js';
import { CreateUserUseCase } from '../use-cases/create-user.use-case.js';
import { DeactivateUserUseCase } from '../use-cases/deactivate-user.use-case.js';
import { DeleteUserUseCase } from '../use-cases/delete-user.use-case.js';
import { GetPublicProfileUseCase } from '../use-cases/get-public-profile.use-case.js';
import { GetUserDashboardUseCase } from '../use-cases/get-user-dashboard.use-case.js';
import { GetUserUseCase } from '../use-cases/get-user.use-case.js';
import { UpdateNotificationSettingsUseCase } from '../use-cases/update-notification-settings.use-case.js';
import { UpdatePreferencesUseCase } from '../use-cases/update-preferences.use-case.js';
import { UpdatePrivacySettingsUseCase } from '../use-cases/update-privacy-settings.use-case.js';
import { UpdateUserUseCase } from '../use-cases/update-user.use-case.js';
import { UploadAvatarUseCase } from '../use-cases/upload-avatar.use-case.js';

export class UserApplicationService {
  private readonly createUserUseCase = new CreateUserUseCase();
  private readonly getUserUseCase = new GetUserUseCase();
  private readonly updateUserUseCase = new UpdateUserUseCase();
  private readonly deactivateUserUseCase = new DeactivateUserUseCase();
  private readonly deleteUserUseCase = new DeleteUserUseCase();
  private readonly uploadAvatarUseCase = new UploadAvatarUseCase();
  private readonly updatePreferencesUseCase = new UpdatePreferencesUseCase();
  private readonly updatePrivacySettingsUseCase = new UpdatePrivacySettingsUseCase();
  private readonly updateNotificationSettingsUseCase = new UpdateNotificationSettingsUseCase();
  private readonly getPublicProfileUseCase = new GetPublicProfileUseCase();
  private readonly getUserDashboardUseCase = new GetUserDashboardUseCase();

  public async createUser(command: CreateUserCommand): Promise<UserDto> {
    return this.createUserUseCase.execute(command);
  }

  public async getUser(query: GetUserQuery): Promise<UserDto> {
    return this.getUserUseCase.execute(query);
  }

  public async updateUser(command: UpdateUserCommand): Promise<UserDto> {
    return this.updateUserUseCase.execute(command);
  }

  public async deactivateUser(command: DeactivateUserCommand): Promise<boolean> {
    return this.deactivateUserUseCase.execute(command);
  }

  public async deleteUser(userId: string): Promise<boolean> {
    return this.deleteUserUseCase.execute(userId);
  }

  public async uploadAvatar(command: UploadAvatarCommand): Promise<string> {
    return this.uploadAvatarUseCase.execute(command);
  }

  public async updatePreferences(command: UpdatePreferencesCommand): Promise<boolean> {
    return this.updatePreferencesUseCase.execute(command);
  }

  public async updatePrivacy(command: UpdatePrivacyCommand): Promise<boolean> {
    return this.updatePrivacySettingsUseCase.execute(command);
  }

  public async updateNotifications(command: UpdateNotificationsCommand): Promise<boolean> {
    return this.updateNotificationSettingsUseCase.execute(command);
  }

  public async getPublicProfile(query: GetPublicProfileQuery): Promise<UserProfileDto> {
    return this.getPublicProfileUseCase.execute(query);
  }

  public async getUserDashboard(query: GetUserDashboardQuery): Promise<{ user: UserDto; stats: { goalsCount: number } }> {
    return this.getUserDashboardUseCase.execute(query);
  }
}
