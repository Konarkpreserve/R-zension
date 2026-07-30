import { motion } from "framer-motion";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <motion.section
      initial={{
        opacity: 0,
        filter: "blur(20px)",
        y: 40,
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      className="relative flex min-h-screen flex-col items-center justify-center px-8 text-center"
    >
      <span
        className="
          mb-10
          rounded-full
          bg-white/5
          px-5
          py-2
          text-xs
          uppercase
          tracking-[0.45em]
          text-cyan-300
          backdrop-blur-xl
        "
      >
        Competitive Growth Platform
      </span>

      <h1
        className="
          bg-gradient-to-r
          from-cyan-300
          via-white
          to-purple-400
          bg-clip-text
          text-8xl
          font-black
          tracking-tight
          text-transparent
          md:text-[10rem]
        "
      >
        R-zension
      </h1>

      <p
        className="
          mt-8
          max-w-3xl
          text-xl
          leading-9
          text-slate-400
        "
      >
        Rise. Analyze. Ascend.
      </p>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-5">
        <button
            className="
            rounded-full
            bg-white
            px-8
            py-4
            text-base
            font-semibold
            text-black
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-2xl
            "
        >
            Begin Ascension
        </button>

        <button
            className="
            rounded-full
            bg-white/5
            px-8
            py-4
            text-base
            font-medium
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            hover:bg-white/10
            "
        >
            Watch Preview
        </button>
        </div>
      <ScrollIndicator />
    </motion.section>
  );
}