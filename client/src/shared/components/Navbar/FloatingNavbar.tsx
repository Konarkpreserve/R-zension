import { motion } from "framer-motion";

export default function FloatingNavbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <nav className="flex items-center gap-8 rounded-full bg-white/5 px-6 py-3 backdrop-blur-2xl shadow-lg shadow-black/20">
        <span className="font-semibold tracking-wide text-white">
          R-zension
        </span>

        <a
          href="#features"
          className="text-sm text-slate-300 transition hover:text-white"
        >
          Features
        </a>

        <a
          href="#about"
          className="text-sm text-slate-300 transition hover:text-white"
        >
          About
        </a>

        <button
          className="rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:scale-105"
        >
          Begin Ascension
        </button>
      </nav>
    </motion.header>
  );
}