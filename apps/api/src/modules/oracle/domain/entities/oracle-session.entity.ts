export class OracleSessionEntity {
  constructor(
    public readonly sessionId: string,
    public readonly userId: string,
    public readonly startedAt: Date
  ) {}
}
