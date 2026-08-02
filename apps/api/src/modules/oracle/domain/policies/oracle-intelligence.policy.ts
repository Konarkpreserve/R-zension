export class OracleIntelligencePolicy {
  public static readonly MINIMUM_DATA_POINTS_FOR_PREDICTION = 7;
  public static readonly CONFIDENCE_THRESHOLD = 0.75;

  public static hasSufficientData(dataPointsCount: number): boolean {
    return dataPointsCount >= OracleIntelligencePolicy.MINIMUM_DATA_POINTS_FOR_PREDICTION;
  }
}
