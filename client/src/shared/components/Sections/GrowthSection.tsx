import { motion } from "framer-motion";
import { TrendingUp, Zap } from "lucide-react";

export default function GrowthSection() {
  const metrics = [
    { label: "Average Velocity Gain", value: "+38.4%", note: "Over 30-day ascension cycle" },
    { label: "Milestone Completion", value: "94.2%", note: "Oracle guided targets" },
    { label: "Predictive Precision", value: "98.8%", note: "Verified by vector telemetry" },
    { label: "Continuous Streak", value: "24.5 Days", note: "Average active ascendant" },
  ];

  return (
    <section id="growth" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Glow Accent */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CONTINUOUS GROWTH ENGINE</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            Turn daily progress into exponential ascension.
          </h2>

          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            Growth is not linear—it is compounding. R-zension eliminates stagnation by anticipating productivity dips before they happen and recommending instant pivot vectors.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {metrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-[#0d111a]/80 border border-white/5">
                <div className="text-2xl font-heading font-bold text-white mb-1">{m.value}</div>
                <div className="text-xs font-medium text-slate-300">{m.label}</div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">{m.note}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Trajectory Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 p-8 rounded-2xl bg-gradient-to-b from-[#131a26] to-[#0d111a] border border-white/10 shadow-2xl relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-heading font-semibold text-white">Ascension Curve vs Baseline Plateau</span>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
              Live Trajectory
            </span>
          </div>

          {/* Curve Visualization Box */}
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-cyan-300">R-ZENSION ASCENSION CURVE</span>
                <span className="text-emerald-400">+142% Acceleration</span>
              </div>
              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden p-[1px]">
                <div className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 rounded-full w-[88%]" />
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-2 opacity-50">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">CONVENTIONAL DASHBOARD PLATEAU</span>
                <span className="text-slate-500">+12% Stagnant</span>
              </div>
              <div className="w-full bg-white/5 h-3 rounded-full overflow-hidden p-[1px]">
                <div className="h-full bg-slate-600 rounded-full w-[25%]" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
