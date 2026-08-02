import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class OracleAnalysisException extends AppError {
  constructor(reason: string) {
    super(`Oracle analysis engine failed: ${reason}`, 500, ErrorCode.INTERNAL_SERVER_ERROR, undefined, true);
  }
}
