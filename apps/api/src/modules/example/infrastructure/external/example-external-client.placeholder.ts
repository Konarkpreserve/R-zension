export class ExampleExternalClientPlaceholder {
  public async fetchRemoteData(): Promise<{ status: string }> {
    return { status: 'healthy' };
  }
}
