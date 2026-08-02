export interface LeaderboardEntryDto {
  userId: string;
  rank: number;
  score: number;
  tier: string;
  division: string;
  velocity: number;
  momentum: 'ASCENDING' | 'STABLE' | 'DESCENDING';
}
