import { AuthSessionDto } from '../dto/auth-session.dto.js';
import { GetActiveSessionsQuery } from '../queries/get-active-sessions.query.js';

export class GetActiveSessionsUseCase {
  public async execute(_query: GetActiveSessionsQuery): Promise<AuthSessionDto[]> {
    return [];
  }
}
