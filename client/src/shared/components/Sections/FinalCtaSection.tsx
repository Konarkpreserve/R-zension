import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenDemoModal: () => void;
}

export default function FinalCtaSection({ onOpenDemoModal }: FinalCtaSectionProps) {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Radiant Glow Sphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-violet-600/20 blur-3xl pointer-events-none rounded-full" />

      {/* Main Container Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 backdrop-blur-2xl p-10 sm:p-16 text-center shadow-2xl shadow-black border border-white/[0.08] overflow-hidden"
      >
        {/* Top Glow Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ascension Access Vector</span>
        </div>

        <h2 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading max-w-3xl mx-auto">
          Ready to Elevate Your Enterprise <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            To Zenith Tier Supremacy?
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Experience continuous AI mission control, automated telemetry forecasting, and real-time competitive positioning today.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Start Your Ascension</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-400 mt-8 font-mono">
          <ShieldCheck className="w-4 h-4 text-cyan-400" />
          <span>Priority Onboarding Deployment Active &bull; AI Mission Control Ready</span>
        </div>
      </motion.div>
    </section>
  );
}
