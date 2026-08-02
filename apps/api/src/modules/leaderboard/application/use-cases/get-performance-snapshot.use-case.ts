import { PerformanceSnapshotDto } from '../dto/performance-snapshot.dto.js';

export class GetPerformanceSnapshotUseCase {
  public async execute(userId: string): Promise<PerformanceSnapshotDto> {
    return {
      userId,
      score: 1000,
      rank: 1,
      percentile: 99.9,
      velocity: 15,
      snapshotAt: new Date().toISOString(),
    };
  }
}
