import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight, Compass } from "lucide-react";

export default function FloatingNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 80 && !mobileMenuOpen) {
      setHidden(true);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Vision", href: "#vision", id: "nav-link-vision" },
    { name: "The Problem", href: "#problem", id: "nav-link-problem" },
    { name: "Live Preview", href: "#preview", id: "nav-link-preview" },
    { name: "Oracle AI", href: "#oracle", id: "nav-link-oracle" },
    { name: "Competition", href: "#competition", id: "nav-link-competition" },
    { name: "Growth", href: "#growth", id: "nav-link-growth" },
    { name: "Built For", href: "#built-for", id: "nav-link-built-for" },
  ];

  return (
    <motion.header
      variants={{
        visible: { y: 0, opacity: 1 },
        hidden: { y: -100, opacity: 0 },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pointer-events-none"
    >
      <nav
        id="main-floating-nav"
        aria-label="Main Navigation"
        className="pointer-events-auto flex items-center justify-between rounded-full bg-[#0d111a]/80 backdrop-blur-2xl border border-white/10 px-4 sm:px-5 py-2.5 sm:py-3 shadow-2xl shadow-black/60 transition-all duration-300"
      >
        {/* Brand Identity */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-full p-1 transition-transform active:scale-95"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-[1px] shadow-sm shadow-cyan-500/20">
            <div className="w-full h-full bg-[#070a10] rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300">
              <Sparkles className="w-4 h-4 text-cyan-400 group-hover:text-white transition-colors duration-300" />
            </div>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-heading font-bold text-base sm:text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
              R-zension
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-cyan-400/90 uppercase -mt-1 font-mono">
              Ascension OS
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] rounded-full px-3 py-1 border border-white/5 shadow-inner">
          {navLinks.map((link) => (
            <a
              key={link.name}
              id={link.id}
              href={link.href}
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-full transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#preview"
            id="btn-begin-ascension-nav"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-cyan-400/50 transition-transform active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full transition-all duration-300 group-hover:opacity-100 opacity-80" />
            <span className="relative flex items-center gap-1.5 sm:gap-2 rounded-full bg-[#070a10] px-3.5 sm:px-4 py-2 sm:py-2 text-xs font-semibold text-white transition-all duration-300 group-hover:bg-transparent min-h-[38px] min-w-[44px]">
              <span className="whitespace-nowrap">Begin Ascension</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </span>
          </a>

          <button
            id="btn-mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-slate-300 hover:text-white rounded-full bg-white/5 border border-white/10 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mt-3 lg:hidden rounded-2xl bg-[#0d111a]/95 backdrop-blur-2xl border border-white/10 p-4 sm:p-5 shadow-2xl"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-${link.id}`}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-sm text-slate-300 hover:text-white px-4 py-3 rounded-xl hover:bg-white/5 transition-colors min-h-[44px]"
                >
                  <span>{link.name}</span>
                  <Compass className="w-4 h-4 text-cyan-400 opacity-50" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}