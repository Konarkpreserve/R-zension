import { PrismaClient } from '@prisma/client';
import { LeaderboardEntryEntity } from '../../../domain/entities/leaderboard-entry.entity.js';
import { ILeaderboardRepository } from '../../../domain/interfaces/leaderboard-repository.interface.js';

export class PrismaLeaderboardRepository implements ILeaderboardRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findByUserId(_userId: string): Promise<LeaderboardEntryEntity | null> {
    return null;
  }

  public async getTopEntries(_limit: number): Promise<LeaderboardEntryEntity[]> {
    return [];
  }

  public async getNearbyEntries(_userId: string, _range: number): Promise<LeaderboardEntryEntity[]> {
    return [];
  }

  public async save(entry: LeaderboardEntryEntity): Promise<LeaderboardEntryEntity> {
    return entry;
  }
}
