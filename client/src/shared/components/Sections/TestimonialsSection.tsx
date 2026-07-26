import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";
import type { TestimonialItem } from "../../../types";

const testimonials: TestimonialItem[] = [
  {
    id: "t-1",
    author: "Elena Rostova",
    role: "VP of Product Strategy",
    company: "Aura Dynamics",
    industry: "Enterprise AI",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "R-zension replaced four fragmented analytics tools with a single continuous intelligence feed. Oracle identified expansion windows we didn't know existed.",
    metricsAchieved: "+3.8x Market Velocity",
  },
  {
    id: "t-2",
    author: "Marcus Vance",
    role: "Chief Growth Officer",
    company: "Vertex Labs",
    industry: "Fintech & Robotics",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The Zenith Leaderboard gave our executive team complete visibility into global tier rankings. We climbed 4 rank positions within 60 days.",
    metricsAchieved: "Top #2 Global Rank",
  },
  {
    id: "t-3",
    author: "Sarah Chen",
    role: "Head of Revenue Operations",
    company: "Nexa Intelligence",
    industry: "Cloud Infrastructure",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    quote: "Oracle Mission Control doesn't just show numbers; it tells us exactly what strategic action to take to defend against churn anomalies.",
    metricsAchieved: "-42% Churn Anomaly",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 text-violet-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner"
        >
          <Quote className="w-3.5 h-3.5" />
          <span>Executive Testimonials</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          Trusted by Growth Leaders <br />
          <span className="bg-gradient-to-r from-white via-violet-200 to-violet-400 bg-clip-text text-transparent">
            Across Global SaaS & AI
          </span>
        </motion.h2>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 rounded-3xl bg-slate-900/60 backdrop-blur-2xl space-y-6 flex flex-col justify-between relative group hover:bg-slate-900/80 transition-all border-b border-white/[0.04]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
                  {t.metricsAchieved}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed italic">"{t.quote}"</p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
              <img
                src={t.avatar}
                alt={t.author}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-cyan-500/30"
              />
              <div>
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  {t.author}
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                </h4>
                <p className="text-xs text-slate-400">{t.role} &bull; <span className="text-slate-300">{t.company}</span></p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
