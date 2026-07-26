import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Activity,
  ShieldCheck,
  TrendingUp,
  Zap,
  Target,
  ChevronRight,
  Compass,
  Sliders,
  Cpu,
} from "lucide-react";
import { oracleInsights, oracleMetrics } from "../data/oracleData";

export default function OracleSection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const [activeTab, setActiveTab] = useState<"insights" | "telemetry" | "strategy">("insights");
  const [selectedInsight, setSelectedInsight] = useState(oracleInsights[0]);

  return (
    <section id="oracle" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Lighting Bloom */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-transparent blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner shadow-cyan-500/20"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ascension Oracle Intelligence</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          AI Mission Control for <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Continuous Strategic Supremacy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Oracle does not wait for questions. It continuously monitors market velocity, calculates predictive growth vectors, and delivers high-confidence strategic directives.
        </motion.p>
      </div>

      {/* AI Mission Control Dashboard Frame */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 overflow-hidden"
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-ping absolute inset-0 opacity-75" />
              <div className="w-3 h-3 rounded-full bg-cyan-400 relative" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm tracking-wide">ORACLE ENGINE v4.2</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono">LIVE TELEMETRY</span>
              </div>
              <p className="text-slate-400 text-xs mt-0.5">Continuous Autonomous Analysis Active</p>
            </div>
          </div>

          {/* Mission Control Tabs */}
          <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-full backdrop-blur-md self-stretch sm:self-auto justify-center">
            <button
              onClick={() => setActiveTab("insights")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "insights"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              Strategic Stream
            </button>
            <button
              onClick={() => setActiveTab("telemetry")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "telemetry"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5" />
              Velocity Forecasting
            </button>
            <button
              onClick={() => setActiveTab("strategy")}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === "strategy"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              Growth Directives
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === "insights" && (
            <motion.div
              key="insights"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              {/* Left Column: Insight Stream Items */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between px-2 mb-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Detected Signals</span>
                  <span className="text-[11px] font-mono text-cyan-400">{oracleInsights.length} Active Vectors</span>
                </div>

                {oracleInsights.map((insight) => {
                  const isSelected = selectedInsight.id === insight.id;
                  return (
                    <div
                      key={insight.id}
                      onClick={() => setSelectedInsight(insight)}
                      className={`group cursor-pointer p-4 rounded-2xl transition-all duration-300 relative ${
                        isSelected
                          ? "bg-gradient-to-r from-cyan-950/40 via-slate-800/60 to-slate-900/60 shadow-lg"
                          : "bg-white/[0.02] hover:bg-white/[0.05]"
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-cyan-400 to-violet-500 rounded-r-full" />
                      )}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                                insight.category === "Velocity"
                                  ? "bg-cyan-500/10 text-cyan-400"
                                  : insight.category === "Benchmark"
                                  ? "bg-violet-500/10 text-violet-400"
                                  : insight.category === "Risk"
                                  ? "bg-emerald-500/10 text-emerald-400"
                                  : "bg-purple-500/10 text-purple-400"
                              }`}
                            >
                              {insight.category}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">{insight.timestamp}</span>
                          </div>
                          <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {insight.title}
                          </h4>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-xs font-mono font-bold text-cyan-400">{insight.confidence}%</span>
                          <span className="block text-[10px] text-slate-400">confidence</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column: Deep Strategic Inspection */}
              <div className="lg:col-span-7 bg-white/[0.02] rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 shadow-inner">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider">
                          {selectedInsight.category} Signal Analysis
                        </span>
                        <h3 className="text-lg font-bold text-white font-heading">{selectedInsight.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 text-cyan-300 text-xs font-mono font-semibold">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>{selectedInsight.confidence}% Confidence</span>
                    </div>
                  </div>

                  {/* Impact Overview */}
                  <div className="mb-6">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">Predicted Impact</span>
                    <p className="text-2xl font-bold text-white tracking-tight">{selectedInsight.impact}</p>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">{selectedInsight.description}</p>
                  </div>

                  {/* Recommended Action */}
                  <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/15 mb-6">
                    <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold mb-1">
                      <Target className="w-4 h-4" />
                      <span>Recommended Strategic Action</span>
                    </div>
                    <p className="text-slate-200 text-sm font-medium">{selectedInsight.actionableStep}</p>
                  </div>
                </div>

                {/* Bottom Trigger Action */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs text-slate-400">Oracle continuous reasoning active</span>
                  <button
                    onClick={onOpenDemoModal}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                  >
                    <span>Experience Full Oracle Control</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "telemetry" && (
            <motion.div
              key="telemetry"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {oracleMetrics.map((m) => (
                  <div key={m.id} className="p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all">
                    <span className="text-xs font-medium text-slate-400 block mb-2">{m.label}</span>
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-2xl sm:text-3xl font-bold text-white font-mono">{m.value}</span>
                      <span className="text-xs font-bold text-emerald-400 font-mono">{m.change}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 block">{m.forecast}</span>
                  </div>
                ))}
              </div>

              {/* Forecast Visual Graph Simulation */}
              <div className="p-6 rounded-2xl bg-white/[0.02] relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Continuous Growth Projection Vector</h4>
                    <p className="text-xs text-slate-400">Calculated over 10,000 statistical market permutations</p>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-500/10">Trajectory: Exponential</span>
                </div>

                <div className="h-44 w-full relative flex items-end justify-between gap-2 pt-6">
                  {/* Subtle Curve Bars */}
                  {[35, 42, 48, 55, 62, 70, 78, 85, 92, 98].map((val, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-2 group h-full justify-end">
                      <div
                        style={{ height: `${val}%` }}
                        className="w-full rounded-t-lg bg-gradient-to-t from-cyan-950/60 via-cyan-500/40 to-cyan-400 group-hover:to-white transition-all duration-300 relative"
                      >
                        <div className="opacity-0 group-hover:opacity-100 absolute -top-7 left-1/2 -translate-x-1/2 text-[10px] font-mono text-cyan-300 font-bold transition-opacity">
                          {val}%
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">W{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "strategy" && (
            <motion.div
              key="strategy"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className="p-6 rounded-2xl bg-white/[0.02] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Autonomous Market Positioning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Oracle automatically aligns product pricing, messaging, and feature release cadence based on real-time competitor movements.
                </p>
                <div className="pt-2 text-xs font-semibold text-cyan-400 font-mono">Status: Active Optimization</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400">
                  <Sliders className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Predictive Resource Allocation</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Identifies underperforming customer acquisition channels and reallocates capital to highest velocity growth vectors.
                </p>
                <div className="pt-2 text-xs font-semibold text-violet-400 font-mono">Efficiency Gain: +41.2%</div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] space-y-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-base font-bold text-white">Zenith Tier Governance</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Continuous benchmark evaluation ensures your organization maintains top-tier market velocity with zero degradation.
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-400 font-mono">Score Target: 99.4/100</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
