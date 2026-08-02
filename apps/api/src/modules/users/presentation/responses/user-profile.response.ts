export interface UserProfileHttpResponse {
  userId: string;
  displayName: string;
  avatarUrl?: string;
  biography?: string;
  timezone: string;
  locale: string;
}
