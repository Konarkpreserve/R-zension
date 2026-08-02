import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class InvalidLeaderboardOperationException extends AppError {
  constructor(reason: string) {
    super(`Invalid operation on Leaderboard domain: ${reason}`, 400, ErrorCode.VALIDATION_FAILED, undefined, true);
  }
}
