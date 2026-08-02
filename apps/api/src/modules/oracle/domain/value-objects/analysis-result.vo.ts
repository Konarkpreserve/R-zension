export class AnalysisResultValueObject {
  constructor(
    public readonly userId: string,
    public readonly summary: string,
    public readonly computedAt: Date = new Date()
  ) {}
}
