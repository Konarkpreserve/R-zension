import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, Search } from "lucide-react";
import type { FaqItem } from "../../../types";

const faqs: FaqItem[] = [
  {
    id: "faq-1",
    category: "Platform Architecture",
    question: "What is R-zension's core meaning and mission?",
    answer: "R-zension signifies Rank + Zenith + Ascension ('Rise. Analyze. Ascend.'). It is an autonomous competitive intelligence platform engineered to continuously calculate market velocity and position enterprise organizations at global zenith tiers.",
  },
  {
    id: "faq-2",
    category: "Oracle AI Engine",
    question: "How does Oracle AI Mission Control operate?",
    answer: "Oracle is a continuous intelligence mission control system, not a chatbot. It continuously streams telemetry, calculates predictive growth vectors, identifies churn anomalies, and synthesizes high-confidence strategic directives without waiting for manual user queries.",
  },
  {
    id: "faq-3",
    category: "Leaderboard & Scoring",
    question: "How is the Zenith Score calculated on the Global Leaderboard?",
    answer: "The Zenith Score (scale 0-100) is evaluated continuously based on real-time execution velocity, revenue acceleration, pricing elasticity, and retention resilience compared against industry peer benchmarks.",
  },
  {
    id: "faq-4",
    category: "Integration & Telemetry",
    question: "How difficult is it to integrate telemetry streams with R-zension?",
    answer: "R-zension provides zero-friction streaming telemetry SDKs and unified API webhooks designed to ingest metric vectors in under 15 minutes.",
  },
  {
    id: "faq-5",
    category: "Security & Governance",
    question: "What security standards govern enterprise telemetry data?",
    answer: "All telemetry data is encrypted at rest and in transit using AES-256 and TLS 1.3 standards. R-zension maintains zero-trust governance protocols across all deployment regions.",
  },
];

export default function FaqSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const filteredFaqs = faqs.filter(
    (f) =>
      f.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md shadow-inner"
        >
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight font-heading"
        >
          Everything You Need to Know <br />
          <span className="bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            About R-zension & Oracle
          </span>
        </motion.h2>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto mt-8">
          <Search className="w-4 h-4 text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/[0.03] text-white placeholder:text-slate-500 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
          />
        </div>
      </div>

      {/* Accordion Items */}
      <div className="space-y-4 relative z-10">
        {filteredFaqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="rounded-2xl bg-slate-900/60 backdrop-blur-xl overflow-hidden transition-all border-b border-white/[0.04]"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : faq.id)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-white/[0.04] text-cyan-400">
                    {faq.category}
                  </span>
                  <h3 className="text-base font-bold text-white font-heading">{faq.question}</h3>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/[0.04] pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
