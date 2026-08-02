export class ExampleCreatedEvent {
  public readonly occurredAt: Date;

  constructor(
    public readonly exampleId: string,
    public readonly name: string
  ) {
    this.occurredAt = new Date();
  }
}
