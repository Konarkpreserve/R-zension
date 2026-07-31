import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";

export default function CompetitionSection() {
  const divisionTiers = [
    {
      tier: "Zenith Elite",
      badge: "GLOBAL TOP 1%",
      color: "from-amber-500/20 to-amber-700/10",
      borderColor: "border-amber-500/40",
      textColor: "text-amber-300",
      iconColor: "text-amber-400",
      description: "Reserved for top continuous growth performers across all global workspaces.",
    },
    {
      tier: "Ascension Division",
      badge: "TOP 10%",
      color: "from-blue-500/20 to-cyan-500/10",
      borderColor: "border-cyan-500/40",
      textColor: "text-cyan-300",
      iconColor: "text-cyan-400",
      description: "Sustained momentum velocity above 85+ pts over 30 consecutive days.",
    },
    {
      tier: "Momentum Division",
      badge: "ACTIVE ASCENDANTS",
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/40",
      textColor: "text-emerald-300",
      iconColor: "text-emerald-400",
      description: "Consistent milestone execution and positive daily progress velocity.",
    },
  ];

  return (
    <section id="competition" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 mb-4"
        >
          <Trophy className="w-3.5 h-3.5" />
          <span>COMPETITION WITH PURPOSE</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6"
        >
          Rankings built for inspiration, not intimidation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-slate-300 text-lg leading-relaxed"
        >
          We measure rank velocity (+↑ rank change) and continuous consistency rather than static points. Every member competes against their own potential.
        </motion.p>
      </div>

      {/* Division Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {divisionTiers.map((tier, idx) => (
          <motion.div
            key={tier.tier}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: idx * 0.15 }}
            className={`p-8 rounded-2xl bg-[#0d111a]/90 border ${tier.borderColor} bg-gradient-to-b ${tier.color} backdrop-blur-xl relative group hover:-translate-y-1 transition-all duration-300 shadow-2xl text-left`}
          >
            <div className="flex items-center justify-between mb-6">
              <span className={`text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded border border-white/10 ${tier.textColor}`}>
                {tier.badge}
              </span>
              <Award className={`w-6 h-6 ${tier.iconColor}`} />
            </div>

            <h3 className="font-heading text-2xl font-bold text-white mb-3">
              {tier.tier}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {tier.description}
            </p>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>Ascension Velocity</span>
              <span className={tier.textColor}>Active Division</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
