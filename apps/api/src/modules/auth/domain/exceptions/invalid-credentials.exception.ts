import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class InvalidCredentialsException extends AppError {
  constructor() {
    super('Invalid email address or password provided', 401, ErrorCode.UNAUTHORIZED, undefined, true);
  }
}
