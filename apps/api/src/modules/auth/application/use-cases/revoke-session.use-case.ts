export class RevokeSessionUseCase {
  public async execute(_sessionId: string): Promise<boolean> {
    return true;
  }
}
