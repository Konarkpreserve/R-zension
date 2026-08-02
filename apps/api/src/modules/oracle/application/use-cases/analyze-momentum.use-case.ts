export class AnalyzeMomentumUseCase {
  public async execute(_userId: string): Promise<{ trend: string; velocity: number }> {
    return { trend: 'ASCENDING', velocity: 12.5 };
  }
}
