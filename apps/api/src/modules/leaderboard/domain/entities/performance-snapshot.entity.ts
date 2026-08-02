export class PerformanceSnapshotEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly score: number,
    public readonly rank: number,
    public readonly velocity: number,
    public readonly percentile: number,
    public readonly snapshotAt: Date
  ) {}
}
