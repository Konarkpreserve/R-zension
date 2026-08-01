import { FilterQuery, QueryResult, RepositoryOptions } from '../types/repository.types.js';

export interface IBaseRepository<T, ID = string> {
  findById(id: ID, options?: RepositoryOptions): Promise<T | null>;
  findMany(filter?: FilterQuery<T>, options?: RepositoryOptions): Promise<QueryResult<T>>;
  create(data: Partial<T>, options?: RepositoryOptions): Promise<T>;
  update(id: ID, data: Partial<T>, options?: RepositoryOptions): Promise<T>;
  delete(id: ID, options?: RepositoryOptions): Promise<boolean>;
}
