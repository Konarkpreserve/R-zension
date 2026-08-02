import { AnalyzePerformanceCommand } from '../commands/analyze-performance.command.js';
import { GenerateGrowthPlanCommand } from '../commands/generate-growth-plan.command.js';
import { GenerateReportCommand } from '../commands/generate-report.command.js';
import { OracleInsightDto } from '../dto/oracle-insight.dto.js';
import { OracleReportDto } from '../dto/oracle-report.dto.js';
import { RecommendationDto } from '../dto/recommendation.dto.js';
import { AnalyzeMomentumUseCase } from '../use-cases/analyze-momentum.use-case.js';
import { AnalyzePerformanceUseCase } from '../use-cases/analyze-performance.use-case.js';
import { AnalyzeVelocityUseCase } from '../use-cases/analyze-velocity.use-case.js';
import { ExplainRankChangeUseCase } from '../use-cases/explain-rank-change.use-case.js';
import { GenerateGrowthPlanUseCase } from '../use-cases/generate-growth-plan.use-case.js';
import { GenerateMonthlyReportUseCase } from '../use-cases/generate-monthly-report.use-case.js';
import { GenerateOracleReportUseCase } from '../use-cases/generate-oracle-report.use-case.js';
import { GenerateRecommendationsUseCase } from '../use-cases/generate-recommendations.use-case.js';
import { GenerateWeeklyReportUseCase } from '../use-cases/generate-weekly-report.use-case.js';
import { PredictDemotionUseCase } from '../use-cases/predict-demotion.use-case.js';
import { PredictPromotionUseCase } from '../use-cases/predict-promotion.use-case.js';

export class OracleApplicationService {
  private readonly analyzePerformanceUseCase = new AnalyzePerformanceUseCase();
  private readonly generateRecommendationsUseCase = new GenerateRecommendationsUseCase();
  private readonly predictPromotionUseCase = new PredictPromotionUseCase();
  private readonly predictDemotionUseCase = new PredictDemotionUseCase();
  private readonly generateWeeklyReportUseCase = new GenerateWeeklyReportUseCase();
  private readonly generateMonthlyReportUseCase = new GenerateMonthlyReportUseCase();
  private readonly explainRankChangeUseCase = new ExplainRankChangeUseCase();
  private readonly generateGrowthPlanUseCase = new GenerateGrowthPlanUseCase();
  private readonly analyzeMomentumUseCase = new AnalyzeMomentumUseCase();
  private readonly analyzeVelocityUseCase = new AnalyzeVelocityUseCase();
  private readonly generateOracleReportUseCase = new GenerateOracleReportUseCase();

  public async analyzePerformance(command: AnalyzePerformanceCommand): Promise<string> {
    return this.analyzePerformanceUseCase.execute(command);
  }

  public async generateRecommendations(userId: string): Promise<RecommendationDto[]> {
    return this.generateRecommendationsUseCase.execute(userId);
  }

  public async predictPromotion(userId: string): Promise<{ probability: number; estimatedDays: number }> {
    return this.predictPromotionUseCase.execute(userId);
  }

  public async predictDemotion(userId: string): Promise<{ riskLevel: string; probability: number }> {
    return this.predictDemotionUseCase.execute(userId);
  }

  public async generateWeeklyReport(userId: string): Promise<OracleReportDto> {
    return this.generateWeeklyReportUseCase.execute(userId);
  }

  public async generateMonthlyReport(userId: string): Promise<OracleReportDto> {
    return this.generateMonthlyReportUseCase.execute(userId);
  }

  public async explainRankChange(userId: string, oldRank: number, newRank: number): Promise<string> {
    return this.explainRankChangeUseCase.execute(userId, oldRank, newRank);
  }

  public async generateGrowthPlan(command: GenerateGrowthPlanCommand): Promise<RecommendationDto[]> {
    return this.generateGrowthPlanUseCase.execute(command);
  }

  public async analyzeMomentum(userId: string): Promise<{ trend: string; velocity: number }> {
    return this.analyzeMomentumUseCase.execute(userId);
  }

  public async analyzeVelocity(userId: string): Promise<number> {
    return this.analyzeVelocityUseCase.execute(userId);
  }

  public async generateReport(command: GenerateReportCommand): Promise<OracleReportDto> {
    return this.generateOracleReportUseCase.execute(command);
  }
}
