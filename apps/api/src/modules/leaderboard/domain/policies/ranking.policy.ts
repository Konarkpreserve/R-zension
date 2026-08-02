import { TierEnum } from '../enums/tier.enum.js';

export class RankingPolicy {
  public static readonly PROMOTION_PERCENTILE_THRESHOLD = 90;
  public static readonly DEMOTION_PERCENTILE_THRESHOLD = 15;

  public static isEligibleForPromotion(percentile: number): boolean {
    return percentile >= RankingPolicy.PROMOTION_PERCENTILE_THRESHOLD;
  }

  public static isEligibleForDemotion(percentile: number): boolean {
    return percentile <= RankingPolicy.DEMOTION_PERCENTILE_THRESHOLD;
  }
}
