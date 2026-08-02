import { AnalyzePerformanceCommand } from '../commands/analyze-performance.command.js';

export class AnalyzePerformanceUseCase {
  public async execute(_command: AnalyzePerformanceCommand): Promise<string> {
    return 'Performance analysis placeholder result';
  }
}
