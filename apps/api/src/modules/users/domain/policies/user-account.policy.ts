import { UserEntity } from '../entities/user.entity.js';
import { UserStatusEnum } from '../enums/user-status.enum.js';

export class UserAccountPolicy {
  public static canModifyProfile(user: UserEntity): boolean {
    return user.getStatus() === UserStatusEnum.ACTIVE;
  }
}
