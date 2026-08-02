import { UserProfileDto } from '../dto/user-profile.dto.js';
import { GetPublicProfileQuery } from '../queries/get-public-profile.query.js';

export class GetPublicProfileUseCase {
  public async execute(query: GetPublicProfileQuery): Promise<UserProfileDto> {
    return {
      userId: 'placeholder-user-id',
      displayName: query.username,
      timezone: 'UTC',
      locale: 'en-US',
    };
  }
}
