import { motion } from "framer-motion";
import { Compass, Search, Cpu, TrendingUp, Crown, ArrowRight } from "lucide-react";

const journeySteps = [
  {
    step: "01",
    phase: "Discovery",
    title: "Continuous Telemetry Ingestion",
    description: "Connect your enterprise metrics, customer signals, and competitor data streams without manual setup.",
    icon: Search,
    color: "from-blue-500 to-cyan-400",
    badge: "Zero-Latency Stream",
  },
  {
    step: "02",
    phase: "Analysis",
    title: "Multidimensional Vector Evaluation",
    description: "Our core engine continuously cross-analyzes market velocity against historical zenith performance benchmarks.",
    icon: Cpu,
    color: "from-cyan-400 to-teal-400",
    badge: "Zenith Scoring Engine",
  },
  {
    step: "03",
    phase: "Oracle Intelligence",
    title: "Autonomous Action Directives",
    description: "Oracle synthesizes real-time market shifts into high-confidence strategic directives and growth vectors.",
    icon: Compass,
    color: "from-violet-500 to-purple-500",
    badge: "AI Mission Control",
  },
  {
    step: "04",
    phase: "Growth",
    title: "Hyper-Velocity Execution",
    description: "Deploy recommended market adaptations, optimize pricing elasticity, and capture market share in real time.",
    icon: TrendingUp,
    color: "from-purple-500 to-rose-400",
    badge: "+3.8x Market Velocity",
  },
  {
    step: "05",
    phase: "Ascension",
    title: "Zenith Tier Market Supremacy",
    description: "Secure top global ranking positioning and establish an enduring competitive defense perimeter.",
    icon: Crown,
    color: "from-amber-400 to-yellow-500",
    badge: "Global Tier Rank #1",
  },
];

export default function UserJourneySection({ onOpenDemoModal }: { onOpenDemoModal: () => void }) {
  return (
    <section id="how-it-works" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-cyan-500/10 blur-3xl pointer-events-none rounded-full" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner"
        >
          <Compass className="w-3.5 h-3.5" />
          <span>How R-zension Works</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          The Journey from Data Signals <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            To Market Supremacy
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          A continuous, five-stage evolutionary loop designed to systematically elevate your enterprise velocity.
        </motion.p>
      </div>

      {/* Journey Timeline Steps */}
      <div className="relative z-10 space-y-6">
        {journeySteps.map((s, idx) => {
          const Icon = s.icon;
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-8 p-6 sm:p-8 rounded-3xl bg-slate-900/50 backdrop-blur-xl transition-all duration-300 hover:bg-slate-900/80 group border-b border-white/[0.04] ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Step Number & Graphic Icon */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-white/20 group-hover:text-cyan-400/40 transition-colors">
                  {s.step}
                </span>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} p-0.5 shadow-lg shadow-cyan-500/10`}>
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-white">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Text Info */}
              <div className="flex-1 text-center md:text-left space-y-2">
                <div className="flex items-center justify-center md:justify-start gap-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">{s.phase}</span>
                  <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.05] text-slate-300">
                    {s.badge}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xl">{s.description}</p>
              </div>

              {/* Right Arrow Trigger */}
              <div className="shrink-0">
                <button
                  onClick={onOpenDemoModal}
                  className="p-3 rounded-full bg-white/[0.03] group-hover:bg-cyan-500/10 text-slate-400 group-hover:text-cyan-300 transition-all"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
