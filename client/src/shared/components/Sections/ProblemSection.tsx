import { motion } from "framer-motion";
import { AlertCircle, EyeOff, BarChart3, HelpCircle, ArrowDownRight } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: BarChart3,
      title: "Raw Numbers Without Meaning",
      description:
        "Traditional platforms dump endless statistics and metrics onto dashboards without answering the only question that matters: 'Why does this matter?'",
      highlight: false,
    },
    {
      icon: EyeOff,
      title: "Intimidating Rankings",
      description:
        "Conventional leaderboards compare absolute scores without context, creating discouragement instead of becoming a catalyst for continuous improvement.",
      highlight: true, // Varied elevation for visual rhythm
    },
    {
      icon: HelpCircle,
      title: "Hindsight Over Guidance",
      description:
        "Analytics tools tell you where you were yesterday, but leave you completely blind on how to navigate toward where you should be tomorrow.",
      highlight: false,
    },
  ];

  return (
    <section id="problem" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Lighting Accent — Crimson/Slate Mood */}
      <div className="absolute top-1/2 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-red-500/[0.04] rounded-full blur-[160px] pointer-events-none" />

      {/* Section Header - Centered Layout */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-mono text-red-400 mb-4"
        >
          <AlertCircle className="w-3.5 h-3.5" />
          <span>THE PROBLEM WITH EXISTING TOOLS</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight mb-4 sm:mb-6"
        >
          Data without meaning is just noise.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
        >
          Most software forces users into spreadsheet-like admin portals that track activity without unlocking potential. Growth requires intelligence, not more charts.
        </motion.p>
      </div>

      {/* Alternating Problem Grid with Card Variation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
        {problems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`p-7 sm:p-8 rounded-2xl border text-left transition-all duration-300 group flex flex-col justify-between ${
              item.highlight
                ? "bg-gradient-to-b from-[#131a26] to-[#0d111a] border-red-500/30 shadow-xl shadow-red-500/[0.03] md:-translate-y-2"
                : "bg-[#0d111a]/80 border-white/5 hover:border-red-500/20 shadow-lg"
            }`}
          >
            <div>
              <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-6 group-hover:scale-105 transition-transform">
                <item.icon className="w-5 h-5" />
              </div>

              <h3 className="font-heading text-lg sm:text-xl font-semibold text-white mb-3 flex items-center justify-between">
                <span>{item.title}</span>
                <ArrowDownRight className="w-4 h-4 text-slate-500 group-hover:text-red-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all" />
              </h3>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-500">
              <span>0{index + 1} // FRICTION VECTOR</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
