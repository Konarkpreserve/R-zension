export class TrendAnalysisValueObject {
  constructor(
    public readonly direction: 'UPWARD' | 'FLAT' | 'DOWNWARD',
    public readonly rateOfChange: number
  ) {}
}
