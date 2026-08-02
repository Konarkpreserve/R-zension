import { randomUUID } from 'node:crypto';

export class ExampleId {
  private constructor(private readonly value: string) {}

  public static create(id?: string): ExampleId {
    return new ExampleId(id || randomUUID());
  }

  public getValue(): string {
    return this.value;
  }

  public equals(other: ExampleId): boolean {
    return this.value === other.getValue();
  }
}
