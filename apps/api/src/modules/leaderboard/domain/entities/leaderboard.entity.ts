import { LeaderboardEntryEntity } from './leaderboard-entry.entity.js';

export interface LeaderboardProps {
  id: string;
  seasonId: string;
  entries: LeaderboardEntryEntity[];
  updatedAt: Date;
}

export class LeaderboardEntity {
  constructor(private readonly props: LeaderboardProps) {}

  public getId(): string {
    return this.props.id;
  }

  public getSeasonId(): string {
    return this.props.seasonId;
  }

  public getEntries(): LeaderboardEntryEntity[] {
    return this.props.entries;
  }
}
