export interface UpdatePreferencesHttpRequest {
  theme?: 'light' | 'dark' | 'system';
  timezone?: string;
  locale?: string;
}
