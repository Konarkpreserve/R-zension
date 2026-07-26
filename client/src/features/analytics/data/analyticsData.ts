import type { AnalyticsTrendPoint, StoryMetric } from "../../../types";

export const storyMetrics: StoryMetric[] = [
  {
    title: "Market Velocity Momentum",
    status: "improved",
    value: "3.42x",
    change: "+28.4%",
    insight: "Outperforming 96% of enterprise peers in feature release throughput and customer retention.",
    recommendation: "Increase customer acquisition spend on top performing campaign vectors.",
  },
  {
    title: "Customer Friction & Churn",
    status: "improved",
    value: "1.12%",
    change: "-0.45%",
    insight: "Onboarding drop-off reduced after Oracle automated pre-emptive intervention sequence.",
    recommendation: "Maintain current zero-friction onboarding flow across all enterprise tiers.",
  },
  {
    title: "Expansion Revenue Index",
    status: "improved",
    value: "+44.8%",
    change: "+12.1%",
    insight: "Account expansions increased due to real-time feature adoption tracking.",
    recommendation: "Introduce automated expansion upgrade prompts for heavy tier usage.",
  },
  {
    title: "Competitor Market Share Shift",
    status: "milestone",
    value: "Top 2%",
    change: "+4 Positions",
    insight: "Secured rank #2 on the global Zenith leaderboard this month.",
    recommendation: "Prepare zenith defense protocol to lock in position #1.",
  },
];

export const trendPoints: AnalyticsTrendPoint[] = [
  { period: "Jan", momentum: 42, benchmark: 35, zenithTarget: 50 },
  { period: "Feb", momentum: 58, benchmark: 38, zenithTarget: 60 },
  { period: "Mar", momentum: 64, benchmark: 42, zenithTarget: 70 },
  { period: "Apr", momentum: 78, benchmark: 46, zenithTarget: 80 },
  { period: "May", momentum: 85, benchmark: 50, zenithTarget: 88 },
  { period: "Jun", momentum: 94, benchmark: 52, zenithTarget: 95 },
];
