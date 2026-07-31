import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, GraduationCap, Flame, Palette, Building2, ChevronRight, CheckCircle2 } from "lucide-react";

export default function BuiltForSection() {
  const [activePersona, setActivePersona] = useState<number>(0);

  const personas = [
    {
      id: "engineers",
      title: "Software Engineers",
      icon: Code,
      badge: "ENGINEERING EXCELLENCE",
      description: "Track system architecture milestones, code output velocity, and algorithmic growth with automated telemetry.",
      outcomes: ["Sub-second telemetry tracking", "Automated code milestone velocity", "Technical skill mastery vectors"],
    },
    {
      id: "students",
      title: "Students & Researchers",
      icon: GraduationCap,
      badge: "ACADEMIC ASCENSION",
      description: "Structure research goals, master complex subjects, and compete on academic benchmarks with predictive AI guidance.",
      outcomes: ["Study streak optimization", "Curriculum velocity tracking", "Peer benchmark rankings"],
    },
    {
      id: "athletes",
      title: "Athletes & Leaders",
      icon: Flame,
      badge: "PEAK PERFORMANCE",
      description: "Measure physical and mental consistency, track recovery indicators, and ascend division tiers continuously.",
      outcomes: ["Consistency velocity scoring", "Performance burnout prevention", "Division leaderboard ascension"],
    },
    {
      id: "creators",
      title: "Creators & Builders",
      icon: Palette,
      badge: "CREATIVE MOMENTUM",
      description: "Maintain shipping cadence, track content portfolio milestones, and turn ideas into published artifacts.",
      outcomes: ["Shipping cadence velocity", "Project milestone completion", "Portfolio impact scoring"],
    },
    {
      id: "teams",
      title: "Organizations & Teams",
      icon: Building2,
      badge: "ENTERPRISE INTELLIGENCE",
      description: "Unify team workspaces, align organization goals, and unlock collective team performance without micromanagement.",
      outcomes: ["Shared team workspaces", "Manager strategic insights", "Organizational leaderboards"],
    },
  ];

  return (
    <section id="built-for" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4"
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>BUILT FOR HIGH-PERFORMANCE DOMAINS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6"
        >
          Engineered for whoever seeks mastery.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed px-2"
        >
          Whether you are an individual engineer, a competitive student, or a global enterprise team, R-zension provides tailored ascension vectors.
        </motion.p>
      </div>

      {/* Interactive Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
        {/* Persona Selectors */}
        <div className="lg:col-span-5 space-y-2">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activePersona === idx;

            return (
              <button
                key={p.id}
                id={`persona-tab-${p.id}`}
                onClick={() => setActivePersona(idx)}
                className={`w-full p-4 rounded-xl border text-left transition-all duration-300 flex items-center justify-between min-h-[48px] focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isSelected
                    ? "bg-[#131a26] border-cyan-500/50 shadow-lg shadow-cyan-500/10"
                    : "bg-[#0d111a]/70 border-white/5 hover:border-white/20 opacity-70 hover:opacity-100"
                }`}
                aria-selected={isSelected}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                        : "bg-white/5 text-slate-400 border-white/5"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-semibold text-sm text-white">{p.title}</span>
                </div>
                <ChevronRight
                  className={`w-4 h-4 transition-transform ${
                    isSelected ? "text-cyan-400 translate-x-1" : "text-slate-600"
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Persona Details Canvas */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePersona}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#131a26] to-[#0d111a] border border-white/10 shadow-2xl text-left"
            >
              <span className="text-xs font-mono font-semibold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 inline-block mb-6">
                {personas[activePersona].badge}
              </span>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
                {personas[activePersona].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                {personas[activePersona].description}
              </p>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="text-[11px] sm:text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                  Tailored Ascension Capabilities
                </span>
                {personas[activePersona].outcomes.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
