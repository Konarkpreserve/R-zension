import { motion } from "framer-motion";
import { Zap, ShieldAlert, Sparkles, CheckCircle2 } from "lucide-react";

export default function WhySection() {
  return (
    <section id="why" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-cyan-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Ascension Paradigm Shift</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          Why Modern Enterprises Choose <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Continuous Ascension Over Legacy BI
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Traditional dashboards deliver static hindsight. R-zension operates as a real-time competitive intelligence engine predicting market shifts before they occur.
        </motion.p>
      </div>

      {/* Asymmetric Spatial Layout (Zero Repetitive Box Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        {/* Left Column: Legacy Friction vs R-zension Speed */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-6 space-y-8"
        >
          {/* Legacy BI Contrast Block */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-950/40 backdrop-blur-xl space-y-3 relative overflow-hidden border-b border-rose-500/20">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>Legacy BI & Dashboard Friction</span>
            </div>
            <h3 className="text-xl font-bold text-slate-300">Stale Data & Reactive Decisions</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Static charts updated once a week force executives to make decisions based on outdated market conditions, leaving your market share vulnerable to agile competitors.
            </p>
          </div>

          {/* R-zension Zenith Engine Advantage */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-cyan-950/40 backdrop-blur-2xl space-y-4 relative overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>R-zension Zenith Architecture</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-heading">Sub-Second Telemetry & Predictive Vectors</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Continuous vector stream processing aggregates customer behavior, pricing elasticity, and competitor movements in real time to auto-synthesize growth directives.
            </p>

            <ul className="space-y-2.5 pt-2 text-xs font-medium text-slate-200">
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Real-Time Market Velocity Scoring (Zenith Score)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Autonomous Churn Anomaly Neutralization</span>
              </li>
              <li className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Global Peer Benchmark & Rank Positioning</span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Column: Live Velocity Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-slate-900/50 backdrop-blur-2xl space-y-6 relative overflow-hidden shadow-2xl"
        >
          {/* Top Radial Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

          <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-semibold uppercase">ASCENSION MATRIX</span>
              <h4 className="text-lg font-bold text-white font-heading">Real-Time Advantage Spectrum</h4>
            </div>
            <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full">
              +3.84x Alpha Ratio
            </span>
          </div>

          {/* Metric Rows */}
          <div className="space-y-5">
            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                <span>Competitor Telemetry Latency</span>
                <span className="text-cyan-400 font-bold">14ms vs 7 Days (Legacy)</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full w-[96%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                <span>Oracle Strategic Directives Confidence</span>
                <span className="text-violet-400 font-bold">96.8% Precision</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-violet-500 to-purple-600 rounded-full w-[92%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1.5">
                <span>Expansion Revenue Acceleration</span>
                <span className="text-emerald-400 font-bold">+44.8% YoY</span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full w-[88%]" />
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.02] text-xs text-slate-400 leading-relaxed font-mono">
            System status: Oracle Mission Control active across 14,000+ data streams.
          </div>
        </motion.div>
      </div>
    </section>
  );
}