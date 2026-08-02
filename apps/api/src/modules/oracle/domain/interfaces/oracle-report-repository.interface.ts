import { OracleReportEntity } from '../entities/oracle-report.entity.js';

export interface IOracleReportRepository {
  findById(reportId: string): Promise<OracleReportEntity | null>;
  findByUserId(userId: string): Promise<OracleReportEntity[]>;
  save(report: OracleReportEntity): Promise<OracleReportEntity>;
}
