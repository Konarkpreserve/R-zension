import { ExampleStatus } from '../enums/example-status.enum.js';
import { ExampleId } from '../value-objects/example-id.vo.js';

export interface ExampleProps {
  id?: ExampleId;
  name: string;
  description: string;
  status?: ExampleStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

export class ExampleEntity {
  private readonly id: ExampleId;
  private name: string;
  private description: string;
  private status: ExampleStatus;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(props: ExampleProps) {
    this.id = props.id || ExampleId.create();
    this.name = props.name;
    this.description = props.description;
    this.status = props.status || ExampleStatus.DRAFT;
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
  }

  public getId(): ExampleId {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getStatus(): ExampleStatus {
    return this.status;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

  public activate(): void {
    this.status = ExampleStatus.ACTIVE;
    this.updatedAt = new Date();
  }

  public archive(): void {
    this.status = ExampleStatus.ARCHIVED;
    this.updatedAt = new Date();
  }
}
