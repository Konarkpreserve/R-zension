import { GenerateGrowthPlanCommand } from '../commands/generate-growth-plan.command.js';
import { RecommendationDto } from '../dto/recommendation.dto.js';

export class GenerateGrowthPlanUseCase {
  public async execute(_command: GenerateGrowthPlanCommand): Promise<RecommendationDto[]> {
    return [];
  }
}
