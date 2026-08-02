import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class EmailAlreadyInUseException extends AppError {
  constructor(email: string) {
    super(`Email address '${email}' is already registered`, 409, ErrorCode.RESOURCE_CONFLICT, undefined, true);
  }
}
