import { SessionStatusEnum } from '../enums/session-status.enum.js';
import { DeviceInfoValueObject } from '../value-objects/device-info.vo.js';

export interface AuthSessionProps {
  id: string;
  userId: string;
  refreshToken: string;
  deviceInfo: DeviceInfoValueObject;
  status: SessionStatusEnum;
  createdAt: Date;
  expiresAt: Date;
}

export class AuthSessionEntity {
  constructor(private readonly props: AuthSessionProps) {}

  public getId(): string {
    return this.props.id;
  }

  public getUserId(): string {
    return this.props.userId;
  }

  public getStatus(): SessionStatusEnum {
    return this.props.status;
  }

  public isRevoked(): boolean {
    return this.props.status === SessionStatusEnum.REVOKED;
  }

  public revoke(): void {
    this.props.status = SessionStatusEnum.REVOKED;
  }
}
