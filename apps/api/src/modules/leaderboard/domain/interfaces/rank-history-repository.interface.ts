import { RankHistoryEntity } from '../entities/rank-history.entity.js';

export interface IRankHistoryRepository {
  findByUserId(userId: string): Promise<RankHistoryEntity[]>;
  save(history: RankHistoryEntity): Promise<RankHistoryEntity>;
}
