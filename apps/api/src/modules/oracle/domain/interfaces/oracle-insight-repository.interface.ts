import { OracleInsightEntity } from '../entities/oracle-insight.entity.js';

export interface IOracleInsightRepository {
  findByUserId(userId: string): Promise<OracleInsightEntity[]>;
  save(insight: OracleInsightEntity): Promise<OracleInsightEntity>;
}
