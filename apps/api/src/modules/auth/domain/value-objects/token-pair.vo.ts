import { AccessTokenValueObject } from './access-token.vo.js';
import { RefreshTokenValueObject } from './refresh-token.vo.js';

export class TokenPairValueObject {
  constructor(
    public readonly accessToken: AccessTokenValueObject,
    public readonly refreshToken: RefreshTokenValueObject
  ) {}
}
