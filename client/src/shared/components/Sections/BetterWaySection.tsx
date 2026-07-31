import { motion } from "framer-motion";
import { Sparkles, Brain, Flame, Compass, CheckCircle2 } from "lucide-react";

export default function BetterWaySection() {
  const pillars = [
    {
      badge: "PILLAR 01",
      icon: Brain,
      title: "Intelligence Before Information",
      subtitle: "Meaning over raw metrics",
      description:
        "Every data point displayed by R-zension is enriched with contextual analysis. We answer why performance shifted and how to capitalize on it.",
      highlights: ["Automatic anomaly diagnosis", "Actionable priority ranking", "Zero visual noise"],
      color: "from-[#131a26] via-[#131a26]/90 to-[#0d111a]",
      accentColor: "text-cyan-400",
      borderColor: "border-cyan-500/30 hover:border-cyan-500/50",
      glowColor: "group-hover:shadow-cyan-500/10",
    },
    {
      badge: "PILLAR 02",
      icon: Flame,
      title: "Competition With Purpose",
      subtitle: "Inspiration over ego",
      description:
        "Leaderboards are redesigned around rank velocity, momentum streaks, and personal ascension rather than static absolute scores.",
      highlights: ["Velocity-based momentum", "Fair division scaling", "Positive reinforcement"],
      color: "from-[#131a26] via-[#131a26]/90 to-[#0d111a]",
      accentColor: "text-blue-400",
      borderColor: "border-blue-500/30 hover:border-blue-500/50",
      glowColor: "group-hover:shadow-blue-500/10",
    },
    {
      badge: "PILLAR 03",
      icon: Compass,
      title: "Strategic AI Guidance",
      subtitle: "Oracle predicts the path",
      description:
        "Ascension Oracle acts as a calm, strategic observer—continuously evaluating your goals, predicting bottlenecks, and recommending next actions.",
      highlights: ["Predictive milestone ETA", "Automated obstacle detection", "Quiet non-distracting insights"],
      color: "from-[#131a26] via-[#131a26]/90 to-[#0d111a]",
      accentColor: "text-purple-400",
      borderColor: "border-purple-500/30 hover:border-purple-500/50",
      glowColor: "group-hover:shadow-purple-500/10",
    },
  ];

  return (
    <section id="vision" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Lighting Accent */}
      <div className="absolute top-1/3 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/[0.06] rounded-full blur-[180px] pointer-events-none" />

      {/* Section Header - Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 text-left"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>A BETTER WAY TO ASCEND</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight">
            Designed for continuous, meaningful growth.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 text-left text-slate-300 text-base sm:text-lg leading-relaxed"
        >
          R-zension replaces overwhelming analytics dashboards with an intelligent, continuous growth operating system that transforms performance into ascension.
        </motion.div>
      </div>

      {/* Pillars Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className={`p-7 sm:p-8 rounded-2xl bg-gradient-to-b ${pillar.color} border ${pillar.borderColor} backdrop-blur-xl relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300 shadow-xl ${pillar.glowColor} text-left flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                  {pillar.badge}
                </span>
                <div className={`p-2.5 rounded-xl bg-white/5 border border-white/10 ${pillar.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                  <pillar.icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-2">
                {pillar.title}
              </h3>
              <p className={`text-xs font-mono mb-4 ${pillar.accentColor}`}>
                {pillar.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                {pillar.description}
              </p>
            </div>

            <div className="space-y-2.5 pt-4 border-t border-white/10">
              {pillar.highlights.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${pillar.accentColor}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
