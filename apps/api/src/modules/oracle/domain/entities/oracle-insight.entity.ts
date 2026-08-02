import { InsightSeverityEnum } from '../enums/insight-severity.enum.js';
import { ConfidenceScoreValueObject } from '../value-objects/confidence-score.vo.js';

export interface OracleInsightProps {
  id: string;
  userId: string;
  title: string;
  description: string;
  severity: InsightSeverityEnum;
  confidence: ConfidenceScoreValueObject;
  createdAt: Date;
}

export class OracleInsightEntity {
  constructor(private readonly props: OracleInsightProps) {}

  public getId(): string {
    return this.props.id;
  }

  public getUserId(): string {
    return this.props.userId;
  }

  public getTitle(): string {
    return this.props.title;
  }

  public getSeverity(): InsightSeverityEnum {
    return this.props.severity;
  }
}
