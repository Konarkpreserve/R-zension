import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, TrendingUp, TrendingDown, Minus, ShieldCheck, Flame, ChevronRight } from "lucide-react";
import { leaderboardEntries } from "../data/leaderboardData";
import type { TierType } from "../../../types";

export default function LeaderboardSection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  const [selectedTier, setSelectedTier] = useState<"All" | TierType>("All");

  const filteredEntries = leaderboardEntries.filter(
    (e) => selectedTier === "All" || e.tier === selectedTier
  );

  return (
    <section id="leaderboard" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Radial Background Bloom */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-violet-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner shadow-violet-500/20"
        >
          <Trophy className="w-3.5 h-3.5 text-violet-400" />
          <span>Global Ascension Leaderboard</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          Compete at the Zenith. <br />
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Continuous Ranking Velocity
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          R-zension evaluates market execution, telemetry velocity, and algorithmic growth to calculate real-time global positioning.
        </motion.p>
      </div>

      {/* Leaderboard Table Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 rounded-3xl bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/80"
      >
        {/* Tier Filter Toolbar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <Flame className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-bold text-white tracking-wide">Ascension Tier Rankings</span>
            <span className="text-xs text-slate-400 font-mono">Updated weekly</span>
          </div>

          <div className="flex items-center gap-1 bg-white/[0.03] p-1 rounded-full backdrop-blur-md">
            {(["All", "Zenith", "Apex", "Ascendant"] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedTier === tier
                    ? "bg-gradient-to-r from-violet-600 to-cyan-600 text-white shadow-md shadow-violet-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tier} {tier !== "All" && "Tier"}
              </button>
            ))}
          </div>
        </div>

        {/* Table View */}
        <div className="space-y-3 relative">
          <AnimatePresence mode="popLayout">
            {filteredEntries.map((entry) => {
              const isTopThree = entry.rank <= 3;
              return (
                <motion.div
                  key={entry.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-5 rounded-2xl transition-all duration-300 ${
                    isTopThree
                      ? "bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-transparent hover:bg-white/[0.06] shadow-lg"
                      : "bg-white/[0.015] hover:bg-white/[0.04]"
                  }`}
                >
                  {/* Left Column: Rank + Delta + Organization */}
                  <div className="flex items-center gap-4 sm:gap-6 mb-3 sm:mb-0">
                    {/* Rank Badge */}
                    <div className="flex items-center gap-2 shrink-0">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-mono font-bold text-sm shadow-inner ${
                          entry.rank === 1
                            ? "bg-gradient-to-br from-amber-400 to-yellow-600 text-black font-extrabold shadow-amber-500/30"
                            : entry.rank === 2
                            ? "bg-gradient-to-br from-cyan-300 to-cyan-600 text-black font-extrabold shadow-cyan-500/30"
                            : entry.rank === 3
                            ? "bg-gradient-to-br from-violet-300 to-violet-600 text-white font-extrabold shadow-violet-500/30"
                            : "bg-white/5 text-slate-300"
                        }`}
                      >
                        #{entry.rank}
                      </div>

                      {/* Rank Delta */}
                      <div className="flex items-center gap-0.5 text-xs font-mono font-semibold w-8">
                        {entry.movement === "up" && (
                          <span className="flex items-center text-emerald-400">
                            <TrendingUp className="w-3.5 h-3.5 mr-0.5" />
                            +{entry.weeklyDelta}
                          </span>
                        )}
                        {entry.movement === "down" && (
                          <span className="flex items-center text-rose-400">
                            <TrendingDown className="w-3.5 h-3.5 mr-0.5" />
                            {entry.weeklyDelta}
                          </span>
                        )}
                        {entry.movement === "neutral" && (
                          <span className="flex items-center text-slate-500">
                            <Minus className="w-3.5 h-3.5" />
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Avatar & Org Info */}
                    <div className="flex items-center gap-3">
                      <img
                        src={entry.avatar}
                        alt={entry.name}
                        className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-cyan-400/40 transition-all"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {entry.name}
                          </h4>
                          <span
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                              entry.tier === "Zenith"
                                ? "bg-cyan-500/10 text-cyan-400"
                                : entry.tier === "Apex"
                                ? "bg-violet-500/10 text-violet-400"
                                : "bg-emerald-500/10 text-emerald-400"
                            }`}
                          >
                            {entry.tier}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400">{entry.organization}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Score & Badges */}
                  <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-white/[0.04]">
                    <div className="hidden lg:flex items-center gap-1.5">
                      {entry.badges.map((b, i) => (
                        <span key={i} className="text-[10px] font-medium px-2 py-0.5 rounded bg-white/[0.04] text-slate-300">
                          {b}
                        </span>
                      ))}
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-white font-mono">{entry.score}</span>
                        <span className="text-[11px] text-slate-400 font-mono">/ 100</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 font-mono">{entry.growthVelocity}</span>
                    </div>

                    <button
                      onClick={onOpenDemoModal}
                      className="p-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Bottom CTA Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-violet-400" />
            <span>Continuous verification powered by Ascension Engine</span>
          </div>

          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 via-cyan-500 to-cyan-400 text-white font-semibold text-xs transition-all hover:scale-105 shadow-lg shadow-violet-500/25"
          >
            Claim Your Organization's Rank
          </button>
        </div>
      </motion.div>
    </section>
  );
}
