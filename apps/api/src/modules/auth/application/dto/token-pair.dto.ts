export interface TokenPairDto {
  accessToken: string;
  refreshToken: string;
  tokenType: 'Bearer';
  expiresInSeconds: number;
}
