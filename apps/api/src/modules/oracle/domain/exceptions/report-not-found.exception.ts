import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class ReportNotFoundException extends AppError {
  constructor(reportId: string) {
    super(`Oracle report '${reportId}' was not found`, 404, ErrorCode.RESOURCE_NOT_FOUND, undefined, true);
  }
}
