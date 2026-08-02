import { ExampleStatus } from '../../domain/enums/example-status.enum.js';

export interface ExampleDto {
  id: string;
  name: string;
  description: string;
  status: ExampleStatus;
  createdAt: string;
  updatedAt: string;
}
