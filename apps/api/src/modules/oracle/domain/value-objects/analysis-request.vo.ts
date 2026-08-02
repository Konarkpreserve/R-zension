export class AnalysisRequestValueObject {
  constructor(
    public readonly userId: string,
    public readonly timeframeDays: number = 30
  ) {}
}
