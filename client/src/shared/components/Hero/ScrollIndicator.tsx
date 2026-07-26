import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="mt-16 flex flex-col items-center gap-2 cursor-pointer text-slate-500 hover:text-cyan-400 transition-colors"
      onClick={() => {
        const whySection = document.getElementById("why");
        whySection?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <span className="text-[11px] font-mono uppercase tracking-widest font-semibold">Explore Telemetry</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </motion.div>
  );
}