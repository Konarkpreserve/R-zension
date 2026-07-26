import type { OracleInsight, OracleMetric } from "../../../types";

export const oracleMetrics: OracleMetric[] = [
  {
    id: "m-1",
    label: "Zenith Velocity Score",
    value: "94.8",
    change: "+12.4%",
    trend: "up",
    forecast: "Projected 97.2 by Q4",
  },
  {
    id: "m-2",
    label: "Competitive Alpha Ratio",
    value: "3.42x",
    change: "+0.68x",
    trend: "up",
    forecast: "Outperforming 94% of peers",
  },
  {
    id: "m-3",
    label: "Telemetry Latency",
    value: "14ms",
    change: "-4ms",
    trend: "down",
    forecast: "Near instant anomaly detection",
  },
  {
    id: "m-4",
    label: "Growth Velocity Index",
    value: "+38.6%",
    change: "+5.1%",
    trend: "up",
    forecast: "Sustained hyper-growth trajectory",
  },
];

export const oracleInsights: OracleInsight[] = [
  {
    id: "oi-1",
    category: "Velocity",
    title: "Market Expansion Window Detected",
    description: "Algorithmic correlation reveals a 4.2x engagement surge in mid-market AI tech segments over the past 72 hours.",
    impact: "+18.5% Growth Trajectory",
    confidence: 96,
    actionableStep: "Allocate strategic focus toward multi-regional enterprise acquisition campaigns.",
    timestamp: "Real-time • 2m ago",
  },
  {
    id: "oi-2",
    category: "Benchmark",
    title: "Zenith Tier Threshold Reached",
    description: "Your platform performance metrics have crossed the top 2% global benchmark in retention acceleration.",
    impact: "Top Tier Status",
    confidence: 99,
    actionableStep: "Activate automated competitive defense protocols to preserve market lead.",
    timestamp: "Real-time • 14m ago",
  },
  {
    id: "oi-3",
    category: "Risk",
    title: "Customer Churn Anomaly Neutralized",
    description: "Oracle pattern engine identified micro-friction points in onboarding sequence and auto-triggered pre-emptive retention flows.",
    impact: "Saved $42,000 ARR",
    confidence: 92,
    actionableStep: "Review automated retention flow outcomes in the strategic planning matrix.",
    timestamp: "Real-time • 1h ago",
  },
  {
    id: "oi-4",
    category: "Opportunity",
    title: "Pricing Elasticity Optimization",
    description: "Telemetry indicates enterprise tier willingness-to-pay has expanded by 24% based on new feature velocity.",
    impact: "+28% ARPU Potential",
    confidence: 94,
    actionableStep: "Test tier restructuring on incoming enterprise accounts.",
    timestamp: "Real-time • 3h ago",
  },
];
