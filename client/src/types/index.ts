export type TierType = 'Zenith' | 'Apex' | 'Ascendant';

export interface LeaderboardEntry {
  id: string;
  rank: number;
  previousRank: number;
  movement: 'up' | 'down' | 'neutral';
  weeklyDelta: number;
  name: string;
  avatar: string;
  organization: string;
  score: number;
  growthVelocity: string;
  tier: TierType;
  primaryMetric: string;
  badges: string[];
  momentumScore: number;
}

export interface OracleInsight {
  id: string;
  category: 'Velocity' | 'Risk' | 'Opportunity' | 'Benchmark';
  title: string;
  description: string;
  impact: string;
  confidence: number;
  actionableStep: string;
  timestamp: string;
}

export interface OracleMetric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable';
  forecast: string;
}

export interface AnalyticsTrendPoint {
  period: string;
  momentum: number;
  benchmark: number;
  zenithTarget: number;
}

export interface StoryMetric {
  title: string;
  status: 'improved' | 'declined' | 'stable' | 'milestone';
  value: string;
  change: string;
  insight: string;
  recommendation: string;
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  avatar: string;
  quote: string;
  metricsAchieved: string;
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export interface EarlyAccessFormData {
  fullName: string;
  workEmail: string;
  organizationName: string;
  teamSize: string;
  primaryGoal: string;
}
