export class DemotionRiskValueObject {
  constructor(
    public readonly riskLevel: 'LOW' | 'MEDIUM' | 'HIGH',
    public readonly probability: number
  ) {}
}
