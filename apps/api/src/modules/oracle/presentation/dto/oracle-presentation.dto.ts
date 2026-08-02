import { OracleReportDto } from '../../application/dto/oracle-report.dto.js';
import { OracleReportHttpResponse } from '../responses/oracle-report.response.js';

export class OraclePresentationMapper {
  public static toReportResponse(dto: OracleReportDto): OracleReportHttpResponse {
    return {
      id: dto.id,
      userId: dto.userId,
      reportType: dto.reportType,
      summary: dto.summary,
      insights: dto.insights.map((i) => ({
        id: i.id,
        title: i.title,
        severity: i.severity,
        confidence: i.confidence,
      })),
      recommendations: dto.recommendations.map((r) => ({
        id: r.id,
        category: r.category,
        title: r.title,
        actionPlan: r.actionPlan,
      })),
      generatedAt: dto.generatedAt,
    };
  }
}
