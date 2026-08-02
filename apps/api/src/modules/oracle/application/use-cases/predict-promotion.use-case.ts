export class PredictPromotionUseCase {
  public async execute(_userId: string): Promise<{ probability: number; estimatedDays: number }> {
    return { probability: 0.85, estimatedDays: 14 };
  }
}
