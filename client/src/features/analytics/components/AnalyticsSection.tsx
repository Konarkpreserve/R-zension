import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, ArrowUpRight, Compass, ChevronRight } from "lucide-react";
import { storyMetrics, trendPoints } from "../data/analyticsData";

export default function AnalyticsSection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d" | "YTD">("30d");

  return (
    <section id="analytics" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner shadow-cyan-500/20"
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Story-Driven Telemetry</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          Intelligence That Tells a Story, <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Not Just Data Grid Tables
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Understand immediately what accelerated, what needs attention, and where your competitive momentum is heading next.
        </motion.p>
      </div>

      {/* Main Analytics Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80 space-y-8"
      >
        {/* Top Control Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Performance Narrative</h3>
              <p className="text-xs text-slate-400">Synthesized insights across revenue, retention, and market share</p>
            </div>
          </div>

          <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-full backdrop-blur-md">
            {(["24h", "7d", "30d", "YTD"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  timeframe === t
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Narrative Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {storyMetrics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-all space-y-4 relative group overflow-hidden"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-xs text-slate-400 font-medium block mb-1">{item.title}</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{item.value}</span>
                    <span className="text-xs font-bold text-emerald-400 font-mono flex items-center">
                      <ArrowUpRight className="w-3.5 h-3.5 mr-0.5" />
                      {item.change}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-mono">
                  {item.status.toUpperCase()}
                </span>
              </div>

              {/* Story Insight */}
              <div className="p-3.5 rounded-xl bg-white/[0.02] text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-white block mb-0.5">Key Insight</span>
                {item.insight}
              </div>

              {/* Action Directive */}
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                <Compass className="w-4 h-4 shrink-0 text-cyan-400" />
                <span>{item.recommendation}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Momentum & Benchmark Trend Curve */}
        <div className="p-6 rounded-2xl bg-white/[0.02] space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-sm font-bold text-white">Growth Velocity vs. Zenith Benchmark</h4>
              <p className="text-xs text-slate-400">Comparing your performance trajectory against industry zenith leaders</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                <span className="text-slate-300">Your Momentum</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                <span className="text-slate-400">Industry Avg</span>
              </div>
            </div>
          </div>

          {/* SVG Trend Graph */}
          <div className="h-56 w-full relative pt-4">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id="cyanArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <path
                d="M 0 110 Q 100 80, 200 60 T 400 25 T 500 10 L 500 150 L 0 150 Z"
                fill="url(#cyanArea)"
              />

              <path
                d="M 0 125 Q 100 115, 200 105 T 400 90 T 500 80"
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              <path
                d="M 0 110 Q 100 80, 200 60 T 400 25 T 500 10"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="500" cy="10" r="5" fill="#38bdf8" className="animate-ping" />
              <circle cx="500" cy="10" r="4" fill="#06b6d4" />
            </svg>

            <div className="flex items-center justify-between mt-4 text-[11px] font-mono text-slate-400 border-t border-white/[0.04] pt-2">
              {trendPoints.map((tp, i) => (
                <span key={i}>{tp.period}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <span className="text-xs text-slate-400">Continuous telemetry updates active</span>
          <button
            onClick={onOpenDemoModal}
            className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
          >
            <span>Explore Full Telemetry Control</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
