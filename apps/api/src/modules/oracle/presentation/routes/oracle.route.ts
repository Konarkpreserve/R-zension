import { FastifyInstance } from 'fastify';
import { container } from '../../../../core/di/container.js';
import { ORACLE_TOKENS } from '../../contracts/oracle-module.contract.js';
import { analyzePerformanceSchema, generateReportSchema } from '../validators/oracle.validator.js';

export async function oracleRoutes(app: FastifyInstance): Promise<void> {
  const oracleController = container.resolve(ORACLE_TOKENS.OracleController);

  app.post('/oracle/analyze', { schema: { body: analyzePerformanceSchema } }, oracleController.analyzePerformance);
  app.get('/oracle/recommendations/:userId', oracleController.generateRecommendations);
  app.get('/oracle/predictions/promotion/:userId', oracleController.predictPromotion);
  app.get('/oracle/predictions/demotion/:userId', oracleController.predictDemotion);
  app.get('/oracle/reports/weekly/:userId', oracleController.generateWeeklyReport);
  app.get('/oracle/reports/monthly/:userId', oracleController.generateMonthlyReport);
  app.post('/oracle/explain-rank-change', oracleController.explainRankChange);
  app.post('/oracle/growth-plan', oracleController.generateGrowthPlan);
  app.get('/oracle/momentum/:userId', oracleController.analyzeMomentum);
  app.get('/oracle/velocity/:userId', oracleController.analyzeVelocity);
  app.post('/oracle/reports', { schema: { body: generateReportSchema } }, oracleController.generateOracleReport);
}
