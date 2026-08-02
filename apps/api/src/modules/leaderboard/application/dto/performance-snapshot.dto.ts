export interface PerformanceSnapshotDto {
  userId: string;
  score: number;
  rank: number;
  percentile: number;
  velocity: number;
  snapshotAt: string;
}
