import { LeaderboardEntryDto } from './leaderboard-entry.dto.js';

export interface LeaderboardDto {
  seasonId: string;
  totalParticipants: number;
  entries: LeaderboardEntryDto[];
}
