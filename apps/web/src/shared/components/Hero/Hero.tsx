import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Shield, Activity, Compass } from "lucide-react";
import UnifiedProductPreview from "./UnifiedProductPreview";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 md:pt-40 pb-20 sm:pb-28 md:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden"
    >
      {/* Background Radial Glow Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[350px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none -z-10" />

      {/* Product Tagline Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-5 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3.5 sm:px-4 py-1.5 backdrop-blur-xl shadow-lg"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
        </span>
        <span className="text-[10px] sm:text-xs font-mono font-medium tracking-widest text-cyan-300 uppercase">
          Competitive Intelligence Platform
        </span>
      </motion.div>

      {/* Main Title / Cinematic Typography */}
      <motion.h1
        id="hero-main-title"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="font-heading font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[1.1] max-w-5xl text-white mb-5 sm:mb-6"
      >
        Rise. Analyze.{" "}
        <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Ascend.
        </span>
      </motion.h1>

      {/* Product Vision Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-8 sm:mb-10 font-normal px-2"
      >
        The world's most intelligent platform for personal & competitive growth. Powered by{" "}
        <span className="text-cyan-300 font-medium">Ascension Oracle</span> to transform performance data into meaningful ascension.
      </motion.p>

      {/* Primary Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-12 sm:mb-16 w-full sm:w-auto px-4"
      >
        <a
          href="#preview"
          id="btn-hero-begin-ascension"
          className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 min-h-[44px]"
        >
          <span>Begin Ascension</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="#oracle"
          id="btn-hero-explore-oracle"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-7 py-3.5 sm:py-4 text-sm font-medium text-slate-200 hover:text-white hover:bg-white/10 backdrop-blur-xl transition-all duration-300 min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>Explore Oracle AI</span>
        </a>
      </motion.div>

      {/* Feature Badges Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-[11px] sm:text-xs text-slate-400 font-mono mb-12 sm:mb-16 border-y border-white/5 py-4 w-full max-w-4xl"
      >
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-cyan-400" />
          <span>INTELLIGENCE BEFORE INFORMATION</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <span>COMPETITION WITH PURPOSE</span>
        </div>
        <div className="flex items-center gap-2">
          <Compass className="w-4 h-4 text-purple-400" />
          <span>STRATEGIC PREDICTION</span>
        </div>
      </motion.div>

      {/* Unified Live Product Application Preview Container */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full relative"
        id="preview"
      >
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-cyan-500/30 via-blue-500/10 to-purple-600/20 blur-xl opacity-60 pointer-events-none" />
        <UnifiedProductPreview />
      </motion.div>
    </section>
  );
}