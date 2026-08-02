export class AuthTokenCachePlaceholder {
  private readonly revokedTokens = new Set<string>();

  public async isTokenRevoked(token: string): Promise<boolean> {
    return this.revokedTokens.has(token);
  }

  public async revokeToken(token: string): Promise<void> {
    this.revokedTokens.add(token);
  }
}
