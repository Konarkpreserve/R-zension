import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class ExampleNotFoundException extends AppError {
  constructor(id: string) {
    super(`Example record with ID '${id}' was not found`, 404, ErrorCode.RESOURCE_NOT_FOUND, undefined, true);
  }
}

export class InvalidExampleOperationException extends AppError {
  constructor(reason: string) {
    super(`Invalid operation on example domain: ${reason}`, 400, ErrorCode.VALIDATION_FAILED, undefined, true);
  }
}
