import { UserStatusEnum } from '../enums/user-status.enum.js';
import { EmailValueObject } from '../value-objects/email.vo.js';
import { RoleAssignmentValueObject } from '../value-objects/role-assignment.vo.js';
import { UserProfileValueObject } from '../value-objects/user-profile.vo.js';
import { UserSettingsValueObject } from '../value-objects/user-settings.vo.js';

export interface UserProps {
  id: string;
  email: EmailValueObject;
  profile: UserProfileValueObject;
  settings: UserSettingsValueObject;
  role: RoleAssignmentValueObject;
  status: UserStatusEnum;
  createdAt: Date;
  updatedAt: Date;
}

export class UserEntity {
  constructor(private readonly props: UserProps) {}

  public getId(): string {
    return this.props.id;
  }

  public getEmail(): EmailValueObject {
    return this.props.email;
  }

  public getProfile(): UserProfileValueObject {
    return this.props.profile;
  }

  public getSettings(): UserSettingsValueObject {
    return this.props.settings;
  }

  public getStatus(): UserStatusEnum {
    return this.props.status;
  }

  public deactivate(): void {
    this.props.status = UserStatusEnum.INACTIVE;
  }
}
