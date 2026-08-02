import { OracleInsightDto } from './oracle-insight.dto.js';
import { RecommendationDto } from './recommendation.dto.js';

export interface OracleReportDto {
  id: string;
  userId: string;
  reportType: 'WEEKLY' | 'MONTHLY';
  summary: string;
  insights: OracleInsightDto[];
  recommendations: RecommendationDto[];
  generatedAt: string;
}
