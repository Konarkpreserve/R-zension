import { UserRoleEnum } from '../enums/user-role.enum.js';

export class RoleAssignmentValueObject {
  constructor(
    public readonly role: UserRoleEnum = UserRoleEnum.USER,
    public readonly assignedAt: Date = new Date()
  ) {}
}
