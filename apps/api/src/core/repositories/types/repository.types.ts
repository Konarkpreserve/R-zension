export type FilterQuery<T> = {
  [P in keyof T]?: T[P] | unknown;
};

export interface RepositoryOptions {
  transaction?: unknown;
  timeoutMs?: number;
  skip?: number;
  limit?: number;
}

export interface QueryResult<T> {
  data: T[];
  total: number;
  page?: number;
  limit?: number;
}
