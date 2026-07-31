import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070A10] pointer-events-none select-none">
      {/* Top Left Cyan Aurora */}
      <motion.div
        animate={{
          x: [0, 80, -50, 0],
          y: [0, -60, 80, 0],
          scale: [1, 1.12, 0.95, 1],
          opacity: [0.12, 0.18, 0.14, 0.12],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-40 -top-40 h-[800px] w-[800px] rounded-full bg-[#22D3EE] blur-[180px]"
      />

      {/* Top Right Ascension Blue Aurora */}
      <motion.div
        animate={{
          x: [0, -100, 60, 0],
          y: [0, 90, -40, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.15, 0.22, 0.12, 0.15],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-10 h-[850px] w-[850px] rounded-full bg-[#3B82F6] blur-[200px]"
      />

      {/* Center/Bottom Zenith Violet Aura */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -70, 90, 0],
          scale: [0.95, 1.1, 1, 0.95],
          opacity: [0.1, 0.16, 0.08, 0.1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/3 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B5CF6] blur-[170px]"
      />

      {/* Bottom Momentum Emerald Pulse */}
      <motion.div
        animate={{
          x: [0, -40, 40, 0],
          y: [0, 50, -30, 0],
          opacity: [0.05, 0.1, 0.04, 0.05],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-[#22C55E] blur-[190px]"
      />

      {/* Precision Geometric Grid Mesh */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Vignette Lighting Layer */}
      <div className="absolute inset-0 bg-radial from-transparent via-[#070A10]/60 to-[#070A10]" />
    </div>
  );
}