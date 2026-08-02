export class ForecastValueObject {
  constructor(
    public readonly projectedScore: number,
    public readonly confidenceInterval: [number, number]
  ) {}
}
