import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function FinalCTASection() {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative overflow-hidden text-center">
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-blue-600/20 to-purple-600/20 rounded-full blur-[180px] pointer-events-none -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-12 md:p-16 rounded-3xl bg-gradient-to-b from-[#131a26]/90 via-[#0d111a]/95 to-[#070a10] border border-cyan-500/30 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.9)] backdrop-blur-2xl relative overflow-hidden max-w-5xl mx-auto"
      >
        {/* Glow corner accents */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>ASCEND BEYOND POTENTIAL</span>
        </div>

        <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight leading-tight mb-6">
          Ready to transform raw effort into{" "}
          <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            intelligent ascension?
          </span>
        </h2>

        <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
          Join thousands of engineers, researchers, and high-performance teams using R-zension to measure progress and unlock potential.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#preview"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 px-9 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <span>Begin Ascension Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400 pt-8 border-t border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>INSTANT PREVIEW ACCESS</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-400" />
            <span>ZERO SETUP REQUIRED</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
