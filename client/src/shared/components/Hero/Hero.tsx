import { motion } from "framer-motion";
import { Sparkles, ArrowRight, TrendingUp, Zap, Cpu } from "lucide-react";
import ScrollIndicator from "./ScrollIndicator";

interface HeroProps {
  onOpenDemoModal: () => void;
}

export default function Hero({ onOpenDemoModal }: HeroProps) {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Hero Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-violet-600/15 blur-3xl pointer-events-none rounded-full" />

      {/* Top Pill Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-8 shadow-inner shadow-cyan-500/20"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span>Rise. Analyze. Ascend. &bull; Rank + Zenith + Ascension</span>
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.08] font-heading mb-6"
      >
        Autonomous Competitive Intelligence. <br />
        <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
          Continuous Market Ascension.
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-slate-400 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10"
      >
        R-zension continuously evaluates market velocity, calculates predictive growth vectors, and positions your organization at the global Zenith tier.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto justify-center"
      >
        <button
          onClick={onOpenDemoModal}
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Start Your Ascension</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <a
          href="#oracle"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white font-semibold text-sm backdrop-blur-xl transition-all border border-white/10 text-center"
        >
          Explore Oracle Intelligence
        </a>
      </motion.div>

      {/* Hero Interactive Platform Preview Frame */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="w-full max-w-5xl rounded-3xl bg-slate-900/60 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-black/90 border border-white/[0.08] relative overflow-hidden"
      >
        {/* Ambient Top Glow Line */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        {/* Header telemetry inside preview */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />
            <div className="text-left">
              <span className="text-xs font-mono font-bold text-cyan-400">TELEMETRY VECTOR: LIVE</span>
              <h3 className="text-sm font-bold text-white">Global Zenith Velocity Index</h3>
            </div>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-semibold">+34.8% YoY Velocity</span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold">Tier Rank: #1</span>
          </div>
        </div>

        {/* Grid Preview Cards inside Frame */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Card 1 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Zenith Score Engine</span>
              <Cpu className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">98.4 <span className="text-xs text-cyan-400 font-normal">/ 100</span></div>
            <p className="text-xs text-slate-400">Top 0.1% Global Market Execution</p>
          </div>

          {/* Card 2 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Oracle Confidence Vector</span>
              <Zap className="w-4 h-4 text-violet-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">96.8%</div>
            <p className="text-xs text-slate-400">Autonomous Strategy Directives Active</p>
          </div>

          {/* Card 3 */}
          <div className="p-5 rounded-2xl bg-white/[0.02] space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Market Alpha Ratio</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono">3.84x</div>
            <p className="text-xs text-slate-400">Outperforming Peer Median Velocity</p>
          </div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <ScrollIndicator />
    </section>
  );
}