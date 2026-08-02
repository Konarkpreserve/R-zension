export class OAuthProviderClientPlaceholder {
  public async getGoogleUser(_accessToken: string): Promise<{ id: string; email: string } | null> {
    return null;
  }

  public async getGitHubUser(_accessToken: string): Promise<{ id: string; email: string } | null> {
    return null;
  }
}
