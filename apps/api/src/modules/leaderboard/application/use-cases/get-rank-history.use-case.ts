export class GetRankHistoryUseCase {
  public async execute(_userId: string): Promise<Array<{ rank: number; recordedAt: string }>> {
    return [];
  }
}
