import { motion } from "framer-motion";

const enterpriseLogos = [
  { name: "Aura Dynamics", mark: "AURA" },
  { name: "Nexa Intelligence", mark: "NEXA" },
  { name: "Vertex Labs", mark: "VERTEX" },
  { name: "Quantum scale", mark: "QUANTUM" },
  { name: "Synthesis AI", mark: "SYNTHESIS" },
  { name: "Cipher Core", mark: "CIPHER" },
];

export default function TrustedBySection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative z-10">
      <div className="text-center mb-8">
        <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          Powering Competitive Intelligence For Next-Gen Tech Platforms
        </span>
      </div>

      {/* Abstract Monochrome Logo Grid */}
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 hover:opacity-100 transition-opacity">
        {enterpriseLogos.map((logo, idx) => (
          <motion.div
            key={logo.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center font-mono font-extrabold text-[10px] text-white group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-all">
              {logo.mark[0]}
            </div>
            <span className="font-heading font-extrabold text-sm sm:text-base tracking-tight text-slate-300 group-hover:text-white transition-colors">
              {logo.mark}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
