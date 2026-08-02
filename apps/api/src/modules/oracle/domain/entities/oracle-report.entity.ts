import { OracleInsightEntity } from './oracle-insight.entity.js';
import { RecommendationEntity } from './recommendation.entity.js';

export class OracleReportEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly reportType: 'WEEKLY' | 'MONTHLY',
    public readonly summary: string,
    public readonly insights: OracleInsightEntity[],
    public readonly recommendations: RecommendationEntity[],
    public readonly generatedAt: Date
  ) {}
}
