export interface UpdatePreferencesCommand {
  userId: string;
  theme?: 'light' | 'dark' | 'system';
  timezone?: string;
  locale?: string;
}
