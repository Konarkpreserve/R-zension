import { LeaderboardEntryEntity } from '../../../domain/entities/leaderboard-entry.entity.js';
import { ILeaderboardRepository } from '../../../domain/interfaces/leaderboard-repository.interface.js';

export class InMemoryLeaderboardRepository implements ILeaderboardRepository {
  private readonly storage = new Map<string, LeaderboardEntryEntity>();

  public async findByUserId(userId: string): Promise<LeaderboardEntryEntity | null> {
    return Array.from(this.storage.values()).find((e) => e.getUserId() === userId) || null;
  }

  public async getTopEntries(limit: number): Promise<LeaderboardEntryEntity[]> {
    return Array.from(this.storage.values()).slice(0, limit);
  }

  public async getNearbyEntries(_userId: string, _range: number): Promise<LeaderboardEntryEntity[]> {
    return [];
  }

  public async save(entry: LeaderboardEntryEntity): Promise<LeaderboardEntryEntity> {
    this.storage.set(entry.getId(), entry);
    return entry;
  }
}
