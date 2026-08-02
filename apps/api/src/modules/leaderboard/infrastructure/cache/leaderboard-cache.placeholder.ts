export class LeaderboardCachePlaceholder {
  private readonly cache = new Map<string, unknown>();

  public async get<T>(key: string): Promise<T | null> {
    return (this.cache.get(key) as T) || null;
  }

  public async set<T>(key: string, value: T): Promise<void> {
    this.cache.set(key, value);
  }
}
