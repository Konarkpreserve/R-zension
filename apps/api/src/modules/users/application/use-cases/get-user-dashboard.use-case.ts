import { UserDto } from '../dto/user.dto.js';
import { GetUserDashboardQuery } from '../queries/get-user-dashboard.query.js';

export class GetUserDashboardUseCase {
  public async execute(query: GetUserDashboardQuery): Promise<{ user: UserDto; stats: { goalsCount: number } }> {
    return {
      user: {
        id: query.userId,
        email: 'user@example.com',
        displayName: 'User',
        status: 'ACTIVE',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
      stats: {
        goalsCount: 0,
      },
    };
  }
}
