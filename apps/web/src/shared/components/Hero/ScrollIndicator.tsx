import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <ChevronDown
        className="text-slate-400"
        size={30}
      />
    </motion.div>
  );
}