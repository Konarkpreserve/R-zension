import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-[#070B14]">
      {/* Aurora 1 */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -80, 100, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-60
          -top-60
          h-[900px]
          w-[900px]
          rounded-full
          bg-cyan-500/15
          blur-[180px]
        "
      />

      {/* Aurora 2 */}
      <motion.div
        animate={{
          x: [0, -140, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-64
          bottom-[-250px]
          h-[950px]
          w-[950px]
          rounded-full
          bg-fuchsia-500/15
          blur-[200px]
        "
      />

      {/* Aurora 3 */}
      <motion.div
        animate={{
          x: [0, 60, -40, 0],
          y: [0, 80, -100, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[600px]
          w-[600px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-sky-300/10
          blur-[150px]
        "
      />

      {/* Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />
    </div>
  );
}