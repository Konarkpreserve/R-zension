import { OracleReportEntity } from '../../domain/entities/oracle-report.entity.js';

export interface OracleReportDbRecord {
  id: string;
  userId: string;
  reportType: 'WEEKLY' | 'MONTHLY';
  summary: string;
  generatedAt: Date;
}

export class OraclePersistenceMapper {
  public static toDomain(record: OracleReportDbRecord): OracleReportEntity {
    return new OracleReportEntity(
      record.id,
      record.userId,
      record.reportType,
      record.summary,
      [],
      [],
      record.generatedAt
    );
  }

  public static toPersistence(entity: OracleReportEntity): OracleReportDbRecord {
    return {
      id: entity.id,
      userId: entity.userId,
      reportType: entity.reportType,
      summary: entity.summary,
      generatedAt: entity.generatedAt,
    };
  }
}
