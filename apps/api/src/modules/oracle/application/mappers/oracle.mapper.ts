import { OracleInsightEntity } from '../../domain/entities/oracle-insight.entity.js';
import { OracleReportEntity } from '../../domain/entities/oracle-report.entity.js';
import { RecommendationEntity } from '../../domain/entities/recommendation.entity.js';
import { OracleInsightDto } from '../dto/oracle-insight.dto.js';
import { OracleReportDto } from '../dto/oracle-report.dto.js';
import { RecommendationDto } from '../dto/recommendation.dto.js';

export class OracleMapper {
  public static toInsightDto(entity: OracleInsightEntity): OracleInsightDto {
    return {
      id: entity.getId(),
      userId: entity.getUserId(),
      title: entity.getTitle(),
      description: '',
      severity: entity.getSeverity(),
      confidence: 0.95,
      createdAt: new Date().toISOString(),
    };
  }

  public static toRecommendationDto(entity: RecommendationEntity): RecommendationDto {
    return {
      id: entity.id,
      userId: entity.userId,
      category: entity.category,
      title: entity.title,
      actionPlan: entity.actionPlan,
      createdAt: entity.createdAt.toISOString(),
    };
  }

  public static toReportDto(entity: OracleReportEntity): OracleReportDto {
    return {
      id: entity.id,
      userId: entity.userId,
      reportType: entity.reportType,
      summary: entity.summary,
      insights: entity.insights.map((i) => OracleMapper.toInsightDto(i)),
      recommendations: entity.recommendations.map((r) => OracleMapper.toRecommendationDto(r)),
      generatedAt: entity.generatedAt.toISOString(),
    };
  }
}
