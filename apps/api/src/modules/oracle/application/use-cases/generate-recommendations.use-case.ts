import { RecommendationDto } from '../dto/recommendation.dto.js';

export class GenerateRecommendationsUseCase {
  public async execute(_userId: string): Promise<RecommendationDto[]> {
    return [];
  }
}
