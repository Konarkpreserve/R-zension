import { LeaderboardEntryEntity } from '../entities/leaderboard-entry.entity.js';

export interface ILeaderboardRepository {
  findByUserId(userId: string): Promise<LeaderboardEntryEntity | null>;
  getTopEntries(limit: number): Promise<LeaderboardEntryEntity[]>;
  getNearbyEntries(userId: string, range: number): Promise<LeaderboardEntryEntity[]>;
  save(entry: LeaderboardEntryEntity): Promise<LeaderboardEntryEntity>;
}
