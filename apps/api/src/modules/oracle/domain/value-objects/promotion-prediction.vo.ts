export class PromotionPredictionValueObject {
  constructor(
    public readonly probability: number,
    public readonly estimatedDaysToPromotion: number
  ) {}
}
