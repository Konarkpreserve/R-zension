import { ExampleEntity } from '../entities/example.entity.js';
import { ExampleStatus } from '../enums/example-status.enum.js';

export class ExampleAccessPolicy {
  public static canModify(entity: ExampleEntity): boolean {
    return entity.getStatus() !== ExampleStatus.ARCHIVED;
  }
}
