export class CompetitiveWindowValueObject {
  constructor(
    public readonly windowId: string,
    public readonly activeFrom: Date,
    public readonly activeTo: Date
  ) {}
}
