import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, Eye, Compass, ShieldCheck, ArrowRight, Target } from "lucide-react";

export default function OracleSection() {
  const [selectedPillar, setSelectedPillar] = useState<number>(0);

  const oraclePillars = [
    {
      action: "Oracle Observes",
      icon: Eye,
      tagline: "Continuous Telemetry",
      description:
        "Oracle silently monitors goal velocity, milestone progress, and behavioral momentum patterns across all connected tools without interrupting your focus.",
      metric: "Sub-second Telemetry Processing",
    },
    {
      action: "Oracle Analyzes",
      icon: Cpu,
      tagline: "Diagnostic Intelligence",
      description:
        "Transforms raw activity metrics into root-cause diagnostic insights, explaining precisely why momentum accelerated or encountered friction.",
      metric: "Root Cause Diagnostics Engine",
    },
    {
      action: "Oracle Predicts",
      icon: Compass,
      tagline: "Trajectory Forecasting",
      description:
        "Utilizes vector forecasting models to project future rank ascension, milestone achievement dates, and potential bottleneck horizons.",
      metric: "98.4% Prediction Accuracy",
    },
    {
      action: "Oracle Recommends",
      icon: Target,
      tagline: "Strategic Action Plans",
      description:
        "Generates targeted, high-impact action recommendations engineered to optimize daily productivity and maximize long-term growth.",
      metric: "High Impact Task Prioritization",
    },
    {
      action: "Oracle Empowers",
      icon: ShieldCheck,
      tagline: "Human-In-The-Loop Control",
      description:
        "Empowers users to execute recommendations with full transparency. AI provides guidance, while human judgment maintains total control.",
      metric: "Full Strategic Transparency",
    },
  ];

  return (
    <section id="oracle" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden">
      {/* Oracle Atmospheric Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[800px] h-[300px] sm:h-[500px] bg-gradient-to-r from-cyan-500/15 via-purple-600/15 to-blue-500/10 rounded-full blur-[120px] sm:blur-[200px] pointer-events-none -z-10" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] sm:text-xs font-mono text-cyan-300 mb-4"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
          <span>ASCENSION ORACLE — STRATEGIC AI ENGINE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4 sm:mb-6"
        >
          Not a chatbot. <br />
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            A strategic intelligence system.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed px-2"
        >
          Oracle does not engage in casual conversation. Oracle observes your performance trajectory, analyzes operational bottlenecks, and guides your ascension with mathematical precision.
        </motion.p>
      </div>

      {/* Oracle Interactive Showcase Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Left Column: Interactive Pillar Selector */}
        <div className="lg:col-span-5 space-y-2.5 sm:space-y-3 text-left">
          <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-widest block mb-3 sm:mb-4">
            The 5 Pillars of Ascension Oracle
          </span>

          {oraclePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillar === idx;

            return (
              <button
                key={pillar.action}
                id={`oracle-pillar-tab-${idx}`}
                onClick={() => setSelectedPillar(idx)}
                className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between min-h-[48px] focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isSelected
                    ? "bg-[#131a26] border-cyan-500/50 shadow-xl shadow-cyan-500/10"
                    : "bg-[#0d111a]/70 border-white/5 hover:border-white/20 opacity-80 hover:opacity-100"
                }`}
                aria-selected={isSelected}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-lg border transition-colors shrink-0 ${
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        : "bg-white/5 text-slate-400 border-white/5"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-xs sm:text-sm text-white">
                      {pillar.action}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-mono block">
                      {pillar.tagline}
                    </span>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 transition-transform shrink-0 ${
                    isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Right Column: Dynamic Oracle Display Canvas */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPillar}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="p-5 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131a26] to-[#1b2433] border border-cyan-500/30 shadow-2xl relative overflow-hidden text-left"
            >
              {/* Top Oracle Status Header */}
              <div className="flex flex-wrap items-center justify-between pb-4 sm:pb-6 border-b border-white/10 mb-4 sm:mb-6 gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs font-mono text-cyan-300 font-semibold tracking-wider uppercase">
                    {oraclePillars[selectedPillar].action}
                  </span>
                </div>
                <span className="text-[10px] sm:text-xs font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                  {oraclePillars[selectedPillar].metric}
                </span>
              </div>

              {/* Core Description */}
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-3">
                {oraclePillars[selectedPillar].tagline}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {oraclePillars[selectedPillar].description}
              </p>

              {/* Sample Live Output Card */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#070a10]/80 border border-white/10 space-y-2.5 font-mono">
                <div className="flex items-center justify-between text-[11px] sm:text-xs text-cyan-400">
                  <span>TELEMETRY STREAM // LIVE</span>
                  <span>CONFIDENCE: 99.1%</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "Strategic evaluation complete. Prioritizing milestone task execution will increase your ascension momentum by +28.4%."
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
