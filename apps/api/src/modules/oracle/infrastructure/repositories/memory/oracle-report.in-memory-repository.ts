import { OracleReportEntity } from '../../../domain/entities/oracle-report.entity.js';
import { IOracleReportRepository } from '../../../domain/interfaces/oracle-report-repository.interface.js';

export class InMemoryOracleReportRepository implements IOracleReportRepository {
  private readonly storage = new Map<string, OracleReportEntity>();

  public async findById(reportId: string): Promise<OracleReportEntity | null> {
    return this.storage.get(reportId) || null;
  }

  public async findByUserId(userId: string): Promise<OracleReportEntity[]> {
    return Array.from(this.storage.values()).filter((r) => r.userId === userId);
  }

  public async save(report: OracleReportEntity): Promise<OracleReportEntity> {
    this.storage.set(report.id, report);
    return report;
  }
}
