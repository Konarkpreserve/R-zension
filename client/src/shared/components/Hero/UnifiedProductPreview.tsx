import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  CheckCircle2,
  Circle,
  ChevronRight,
  ShieldCheck,
  Cpu
} from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  impact: string;
}

export default function UnifiedProductPreview() {
  const [activeTab, setActiveTab] = useState<"oracle" | "goals" | "velocity">("oracle");

  const [milestones, setMilestones] = useState<Milestone[]>([
    {
      id: "m1",
      title: "Deploy Distributed Event Queue Architecture",
      category: "Engineering",
      completed: true,
      impact: "+14.2% Velocity",
    },
    {
      id: "m2",
      title: "Synthesize Oracle Performance Vector Models",
      category: "AI Intelligence",
      completed: true,
      impact: "+18.5% Accuracy",
    },
    {
      id: "m3",
      title: "Complete Advanced Algorithmic Benchmark Suite",
      category: "Growth",
      completed: false,
      impact: "+22.0% Projected",
    },
    {
      id: "m4",
      title: "Publish Organizational Milestone Blueprint",
      category: "Strategy",
      completed: false,
      impact: "+9.4% Efficiency",
    },
  ]);

  const completedCount = milestones.filter((m) => m.completed).length;
  const progressPercent = Math.round((completedCount / milestones.length) * 100);

  const toggleMilestone = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => (m.id === id ? { ...m, completed: !m.completed } : m))
    );
  };

  return (
    <div
      id="unified-product-preview-card"
      className="w-full max-w-5xl mx-auto rounded-2xl bg-[#0d111a]/95 border border-white/10 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl overflow-hidden transition-all duration-300 group hover:border-white/15"
    >
      {/* Window Title bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-5 py-3 sm:py-3.5 bg-[#131a26]/80 border-b border-white/5 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80 hover:brightness-125 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80 hover:brightness-125 transition-all cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-green-500/80 hover:brightness-125 transition-all cursor-pointer" />
          </div>
          <div className="h-4 w-[1px] bg-white/10 mx-1" />
          <div className="flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[11px] sm:text-xs font-mono text-slate-300 font-medium truncate">
              R-zension OS v2.4 — Ascension Control Core
            </span>
          </div>
        </div>

        {/* Live System Telemetry Badge & Tabs */}
        <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-3 overflow-x-auto pb-1 sm:pb-0">
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-mono shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span>Oracle Telemetry</span>
          </div>

          <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/5 text-xs w-full sm:w-auto justify-center">
            <button
              id="tab-preview-oracle"
              onClick={() => setActiveTab("oracle")}
              className={`relative px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium transition-all min-h-[36px] ${
                activeTab === "oracle"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Oracle Synthesis
            </button>
            <button
              id="tab-preview-goals"
              onClick={() => setActiveTab("goals")}
              className={`relative px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium transition-all min-h-[36px] ${
                activeTab === "goals"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Active Matrix
            </button>
            <button
              id="tab-preview-velocity"
              onClick={() => setActiveTab("velocity")}
              className={`relative px-2.5 sm:px-3 py-1.5 rounded-md text-[11px] sm:text-xs font-medium transition-all min-h-[36px] ${
                activeTab === "velocity"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Velocity Metrics
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Body */}
      <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 text-left">
        {/* Left Column: Core Performance State */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-5">
          {/* Goal Ascension Card */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#131a26]/70 border border-white/5 hover:border-cyan-500/30 transition-all duration-300">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-cyan-400" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-300 uppercase tracking-wider">
                  Primary Ascension Goal
                </span>
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20 shadow-sm">
                {progressPercent}% Complete
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-heading font-semibold text-white mb-2 leading-snug">
              Master System Architecture & Algorithmic Excellence
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Target trajectory set for Zenith Division tier. Real-time velocity tracking active.
            </p>

            {/* Dynamic Progress Bar */}
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden mb-4 p-[1px] relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full shadow-[0_0_12px_rgba(34,211,238,0.5)]"
              />
            </div>

            {/* Interactive Milestones */}
            <div className="space-y-2">
              <span className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                Milestone Execution Matrix (Click to toggle)
              </span>
              {milestones.map((m) => (
                <div
                  key={m.id}
                  id={`milestone-item-${m.id}`}
                  onClick={() => toggleMilestone(m.id)}
                  className={`flex items-center justify-between p-3 rounded-lg border transition-all duration-200 cursor-pointer min-h-[44px] ${
                    m.completed
                      ? "bg-white/[0.03] border-white/5 hover:border-emerald-500/30"
                      : "bg-white/5 border-white/10 hover:border-cyan-500/30 hover:bg-white/[0.07]"
                  }`}
                  role="checkbox"
                  aria-checked={m.completed}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleMilestone(m.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-3">
                    {m.completed ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-500 shrink-0" />
                    )}
                    <span
                      className={`text-xs ${
                        m.completed ? "line-through text-slate-400" : "text-slate-200"
                      }`}
                    >
                      {m.title}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-500/5 px-2 py-0.5 rounded border border-cyan-500/10 shrink-0 ml-2">
                    {m.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
            <div className="p-3.5 rounded-xl bg-[#131a26]/70 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>Velocity</span>
              </div>
              <div className="text-xl font-heading font-bold text-white">+28.4%</div>
              <span className="text-[10px] text-emerald-400 font-mono">vs 7-day baseline</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131a26]/70 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                <Zap className="w-3.5 h-3.5 text-purple-400" />
                <span>Streak</span>
              </div>
              <div className="text-xl font-heading font-bold text-white">18 Days</div>
              <span className="text-[10px] text-purple-400 font-mono">Continuous Growth</span>
            </div>

            <div className="p-3.5 rounded-xl bg-[#131a26]/70 border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Global Rank</span>
              </div>
              <div className="text-xl font-heading font-bold text-white">#04 Top</div>
              <span className="text-[10px] text-cyan-400 font-mono">Zenith Elite Division</span>
            </div>
          </div>
        </div>

        {/* Right Column: Ascension Oracle AI Live Stream */}
        <div className="lg:col-span-5 flex flex-col justify-between p-4 sm:p-5 rounded-xl bg-gradient-to-b from-[#131a26]/90 to-[#1b2433]/70 border border-cyan-500/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-semibold text-white">
                    Ascension Oracle AI
                  </h4>
                  <p className="text-[10px] font-mono text-cyan-400">
                    Strategic Intelligence Engine
                  </p>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Observing
              </span>
            </div>

            {/* Oracle Strategic Recommendation Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
                className="space-y-3"
              >
                {activeTab === "oracle" && (
                  <>
                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>INSIGHT #4092</span>
                        <span>98.2% Confidence</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        "Your algorithmic execution rate grew by 18% today. Completing the benchmark suite now will trigger a +3 rank ascension."
                      </p>
                    </div>

                    <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px] font-mono text-purple-300">
                        <span>PREDICTIVE TRAJECTORY</span>
                        <span>Zenith Horizon</span>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        "Maintaining current momentum projects reaching global top 3 within 6 days."
                      </p>
                    </div>
                  </>
                )}

                {activeTab === "goals" && (
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-cyan-300">
                      <span>GOAL MATRIX ANALYSIS</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "2 out of 4 milestone tasks completed. Focus on completing the Algorithmic Benchmark Suite next."
                    </p>
                  </div>
                )}

                {activeTab === "velocity" && (
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-mono text-emerald-300">
                      <span>VELOCITY VECTOR</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "Velocity is 2.4x higher than division average. High consistency detected."
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-slate-400 text-[11px]">Real-time Oracle Guidance Active</span>
            <button
              id="btn-oracle-view-analysis"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-medium transition-colors min-h-[36px] px-2 focus:outline-none focus:ring-1 focus:ring-cyan-400 group"
            >
              <span>View Analysis</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
