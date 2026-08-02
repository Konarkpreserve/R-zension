export interface OracleReportHttpResponse {
  id: string;
  userId: string;
  reportType: 'WEEKLY' | 'MONTHLY';
  summary: string;
  insights: Array<{
    id: string;
    title: string;
    severity: string;
    confidence: number;
  }>;
  recommendations: Array<{
    id: string;
    category: string;
    title: string;
    actionPlan: string[];
  }>;
  generatedAt: string;
}
