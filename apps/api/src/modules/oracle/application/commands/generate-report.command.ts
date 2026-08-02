export interface GenerateReportCommand {
  userId: string;
  reportType: 'WEEKLY' | 'MONTHLY';
}
