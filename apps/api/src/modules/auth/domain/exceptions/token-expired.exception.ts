import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class TokenExpiredException extends AppError {
  constructor(tokenType: 'access' | 'refresh' | 'verification' | 'reset' = 'access') {
    super(`Provided ${tokenType} token has expired or is invalid`, 401, ErrorCode.UNAUTHORIZED, undefined, true);
  }
}
