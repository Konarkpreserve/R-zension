import { UploadAvatarCommand } from '../commands/upload-avatar.command.js';

export class UploadAvatarUseCase {
  public async execute(command: UploadAvatarCommand): Promise<string> {
    return command.avatarUrl;
  }
}
