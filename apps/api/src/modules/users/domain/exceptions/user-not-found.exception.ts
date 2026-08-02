import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class UserNotFoundException extends AppError {
  constructor(idOrEmail: string) {
    super(`User record '${idOrEmail}' was not found`, 404, ErrorCode.RESOURCE_NOT_FOUND, undefined, true);
  }
}
