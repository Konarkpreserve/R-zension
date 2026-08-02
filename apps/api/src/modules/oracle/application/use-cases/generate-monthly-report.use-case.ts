import { OracleReportDto } from '../dto/oracle-report.dto.js';

export class GenerateMonthlyReportUseCase {
  public async execute(userId: string): Promise<OracleReportDto> {
    return {
      id: 'report-monthly-1',
      userId,
      reportType: 'MONTHLY',
      summary: 'Monthly Oracle Executive Summary',
      insights: [],
      recommendations: [],
      generatedAt: new Date().toISOString(),
    };
  }
}
