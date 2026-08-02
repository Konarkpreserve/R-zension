export interface AuthHttpResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresInSeconds: number;
}
