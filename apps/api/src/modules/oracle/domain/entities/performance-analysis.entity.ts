import { DemotionRiskValueObject } from '../value-objects/demotion-risk.vo.js';
import { PlateauDetectionValueObject } from '../value-objects/plateau-detection.vo.js';
import { PromotionPredictionValueObject } from '../value-objects/promotion-prediction.vo.js';
import { TrendAnalysisValueObject } from '../value-objects/trend-analysis.vo.js';

export class PerformanceAnalysisEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly trend: TrendAnalysisValueObject,
    public readonly plateau: PlateauDetectionValueObject,
    public readonly promotionPrediction: PromotionPredictionValueObject,
    public readonly demotionRisk: DemotionRiskValueObject,
    public readonly computedAt: Date
  ) {}
}
