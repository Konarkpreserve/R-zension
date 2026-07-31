import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Trophy,
  Activity,
  RefreshCw,
  Flame
} from "lucide-react";

export default function LiveExperienceSection() {
  const [activeTab, setActiveTab] = useState<"oracle" | "rankings" | "analytics">("oracle");

  const [simulationRunning, setSimulationRunning] = useState(false);
  const [velocityScore, setVelocityScore] = useState(88.4);

  const runSimulation = () => {
    setSimulationRunning(true);
    setTimeout(() => {
      setVelocityScore((prev) => parseFloat((prev + Math.random() * 2.5).toFixed(1)));
      setSimulationRunning(false);
    }, 600);
  };

  const leaderboardData = [
    { rank: 1, name: "Marcus Vance", role: "Staff AI Engineer", momentum: "98.4", streak: "24d", change: "+2" },
    { rank: 2, name: "Elena Rostova", role: "Product Architect", momentum: "96.1", streak: "19d", change: "+1" },
    { rank: 3, name: "Dr. K. Arisawa", role: "Quantum Researcher", momentum: "94.8", streak: "31d", change: "+4" },
    { rank: 4, name: "You (Personal Zenith)", role: "System Contributor", momentum: `${velocityScore}`, streak: "18d", change: "+3" },
    { rank: 5, name: "Julian Thorne", role: "Lead Systems Dev", momentum: "91.2", streak: "14d", change: "-1" },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[700px] h-[250px] sm:h-[400px] bg-blue-600/10 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] sm:text-xs font-mono text-blue-300 mb-4"
        >
          <Activity className="w-3.5 h-3.5" />
          <span>INTERACTIVE PRODUCT ENVIRONMENT</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6"
        >
          Experience R-zension in real time.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed px-2"
        >
          Test how the workspace seamlessly unifies Oracle AI intelligence, rank momentum, and predictive telemetry into one cohesive experience.
        </motion.p>
      </div>

      {/* Interactive Application Container */}
      <div id="live-demo-workspace" className="rounded-2xl bg-[#0d111a] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-2xl">
        {/* Workspace Toolbar */}
        <div className="p-3.5 sm:p-4 bg-[#131a26]/90 border-b border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 sm:pb-0 w-full sm:w-auto">
            <button
              id="tab-demo-oracle"
              onClick={() => setActiveTab("oracle")}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all min-h-[40px] shrink-0 ${
                activeTab === "oracle"
                  ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-lg"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Oracle Synthesis</span>
            </button>

            <button
              id="tab-demo-rankings"
              onClick={() => setActiveTab("rankings")}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all min-h-[40px] shrink-0 ${
                activeTab === "rankings"
                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30 shadow-lg"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-blue-400" />
              <span>Rank Velocity</span>
            </button>

            <button
              id="tab-demo-analytics"
              onClick={() => setActiveTab("analytics")}
              className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium transition-all min-h-[40px] shrink-0 ${
                activeTab === "analytics"
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 shadow-lg"
                  : "text-slate-400 hover:text-white bg-white/5"
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-purple-400" />
              <span>Analytics</span>
            </button>
          </div>

          <div className="flex items-center justify-end">
            <button
              id="btn-simulate-event"
              onClick={runSimulation}
              disabled={simulationRunning}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 hover:bg-cyan-500/20 transition-all disabled:opacity-50 min-h-[40px]"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${simulationRunning ? "animate-spin" : ""}`} />
              <span>Simulate Performance Event</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="p-4 sm:p-6 md:p-8">
          <AnimatePresence mode="wait">
            {activeTab === "oracle" && (
              <motion.div
                key="oracle-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 text-left">
                  <div className="p-4 sm:p-5 rounded-xl bg-[#131a26]/70 border border-white/5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                      ORACLE DIAGNOSTIC #8012
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-1 mb-2">
                      Optimal Velocity Vector Identified
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "Your sprint velocity has sustained a 94.2% consistency over 14 days. Recommending milestone escalation."
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-[#131a26]/70 border border-white/5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                      PREDICTIVE BOTTLENECK DETECTED
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-1 mb-2">
                      Review Latency Risk
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "Cross-team code review queue is experiencing a 12% delay. Oracle suggests delegating review pairs."
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl bg-[#131a26]/70 border border-white/5">
                    <span className="text-[10px] sm:text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                      ASCENSION TARGET ESTIMATE
                    </span>
                    <h4 className="text-sm sm:text-base font-semibold text-white mt-1 mb-2">
                      Zenith Tier in 5.2 Days
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      "At current execution momentum: {velocityScore} pts, your projected global ranking will ascend to Rank #2."
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-6 rounded-xl bg-gradient-to-r from-[#131a26] via-[#1b2433] to-[#131a26] border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
                      <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-heading font-semibold text-white">
                        Oracle Strategic Action Recommendation
                      </h4>
                      <p className="text-xs text-slate-300">
                        Execute 2 core architecture refactors to unlock +12% performance boost.
                      </p>
                    </div>
                  </div>

                  <button
                    id="btn-accept-recommendation"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-cyan-500 text-black font-semibold text-xs hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 min-h-[44px]"
                  >
                    Accept Recommendation
                  </button>
                </div>
              </motion.div>
            )}

            {activeTab === "rankings" && (
              <motion.div
                key="rankings-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1">
                  <h4 className="text-xs sm:text-sm font-mono text-slate-400 uppercase tracking-wider">
                    Global Zenith Division — Rank Velocity Leaderboard
                  </h4>
                  <span className="text-[11px] sm:text-xs text-cyan-400 font-mono">Live Velocity Calculation Active</span>
                </div>

                <div className="space-y-2">
                  {leaderboardData.map((user) => (
                    <div
                      key={user.rank}
                      className={`p-3.5 sm:p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition-all ${
                        user.name.includes("You")
                          ? "bg-cyan-500/10 border-cyan-500/40 shadow-lg shadow-cyan-500/10"
                          : "bg-[#131a26]/70 border-white/5 hover:border-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center font-heading font-bold text-xs sm:text-sm shrink-0 ${
                            user.rank === 1
                              ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                              : user.rank === 2
                              ? "bg-slate-300/20 text-slate-200 border border-slate-300/30"
                              : user.rank === 3
                              ? "bg-amber-700/20 text-amber-500 border border-amber-700/30"
                              : "bg-white/5 text-slate-400"
                          }`}
                        >
                          #{user.rank}
                        </div>
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-xs sm:text-sm text-white">{user.name}</span>
                            {user.name.includes("You") && (
                              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-cyan-400 text-black font-bold">
                                YOU
                              </span>
                            )}
                          </div>
                          <span className="text-[11px] text-slate-400">{user.role}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between w-full sm:w-auto gap-4 sm:gap-6 text-xs font-mono pt-2 sm:pt-0 border-t sm:border-0 border-white/5">
                        <div className="text-left sm:text-right">
                          <span className="text-slate-400 block text-[9px]">MOMENTUM</span>
                          <span className="text-cyan-300 font-bold">{user.momentum} pts</span>
                        </div>

                        <div className="text-left sm:text-right">
                          <span className="text-slate-400 block text-[9px]">STREAK</span>
                          <span className="text-purple-300 flex items-center gap-1">
                            <Flame className="w-3 h-3 text-purple-400" />
                            {user.streak}
                          </span>
                        </div>

                        <div className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold">
                          {user.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "analytics" && (
              <motion.div
                key="analytics-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="p-4 sm:p-6 rounded-xl bg-[#131a26]/70 border border-white/5 text-left">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
                    <div>
                      <h4 className="text-sm sm:text-base font-heading font-semibold text-white">
                        Performance Trajectory & Ascending Curve
                      </h4>
                      <p className="text-xs text-slate-400">
                        Comparing target growth trajectory against actual momentum telemetry.
                      </p>
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 shrink-0">
                      +34.2% Above Baseline
                    </span>
                  </div>

                  {/* Visual Trajectory Representation */}
                  <div className="relative h-40 sm:h-48 w-full bg-white/5 rounded-xl overflow-hidden p-3 sm:p-4 flex items-end justify-between gap-1.5 sm:gap-2 border border-white/5">
                    {[35, 42, 48, 55, 62, 70, 78, 85, 92, 98].map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 sm:gap-2 h-full justify-end group">
                        <div
                          className="w-full bg-gradient-to-t from-cyan-500/40 via-blue-500 to-purple-500 rounded-t transition-all group-hover:brightness-125"
                          style={{ height: `${val}%` }}
                        />
                        <span className="text-[9px] sm:text-[10px] font-mono text-slate-500">D{idx + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
