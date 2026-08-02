import { RecommendationCategoryEnum } from '../enums/recommendation-category.enum.js';

export class RecommendationEntity {
  constructor(
    public readonly id: string,
    public readonly userId: string,
    public readonly category: RecommendationCategoryEnum,
    public readonly title: string,
    public readonly actionPlan: string[],
    public readonly createdAt: Date
  ) {}
}
