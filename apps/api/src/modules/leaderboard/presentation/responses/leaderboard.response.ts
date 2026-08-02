export interface LeaderboardHttpResponse {
  seasonId: string;
  totalParticipants: number;
  entries: Array<{
    userId: string;
    rank: number;
    score: number;
    tier: string;
    division: string;
    velocity: number;
    momentum: string;
  }>;
}
