export class PredictDemotionUseCase {
  public async execute(_userId: string): Promise<{ riskLevel: string; probability: number }> {
    return { riskLevel: 'LOW', probability: 0.05 };
  }
}
