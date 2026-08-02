import { PrismaClient } from '@prisma/client';
import { OracleReportEntity } from '../../../domain/entities/oracle-report.entity.js';
import { IOracleReportRepository } from '../../../domain/interfaces/oracle-report-repository.interface.js';

export class PrismaOracleReportRepository implements IOracleReportRepository {
  constructor(private readonly prisma: PrismaClient) {}

  public async findById(_reportId: string): Promise<OracleReportEntity | null> {
    return null;
  }

  public async findByUserId(_userId: string): Promise<OracleReportEntity[]> {
    return [];
  }

  public async save(report: OracleReportEntity): Promise<OracleReportEntity> {
    return report;
  }
}
