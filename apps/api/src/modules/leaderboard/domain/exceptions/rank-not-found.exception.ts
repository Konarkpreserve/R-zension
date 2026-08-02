import { AppError, ErrorCode } from '../../../../common/errors/index.js';

export class RankNotFoundException extends AppError {
  constructor(userId: string) {
    super(`Leaderboard rank record for user '${userId}' was not found`, 404, ErrorCode.RESOURCE_NOT_FOUND, undefined, true);
  }
}
