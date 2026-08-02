export interface UserProfileDto {
  userId: string;
  displayName: string;
  avatarUrl?: string;
  biography?: string;
  timezone: string;
  locale: string;
}
