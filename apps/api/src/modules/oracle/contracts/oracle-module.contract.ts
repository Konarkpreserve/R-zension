import { ServiceToken } from '../../../core/di/service-token.js';
import { OracleApplicationService } from '../application/services/oracle.application-service.js';
import { IOracleReportRepository } from '../domain/interfaces/oracle-report-repository.interface.js';
import { OracleController } from '../presentation/controllers/oracle.controller.js';

export const ORACLE_TOKENS = {
  OracleReportRepository: new ServiceToken<IOracleReportRepository>('OracleReportRepository'),
  OracleApplicationService: new ServiceToken<OracleApplicationService>('OracleApplicationService'),
  OracleController: new ServiceToken<OracleController>('OracleController'),
} as const;

export interface IOracleModuleContract {
  analyzeUserPerformance(userId: string): Promise<import('../application/dto/oracle-report.dto.js').OracleReportDto>;
  getStrategicAdvice(userId: string): Promise<import('../application/dto/recommendation.dto.js').RecommendationDto[]>;
}
