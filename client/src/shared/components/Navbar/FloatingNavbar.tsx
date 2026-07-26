import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";

interface FloatingNavbarProps {
  onOpenDemoModal: () => void;
}

export default function FloatingNavbar({ onOpenDemoModal }: FloatingNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Why Us", href: "#why" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Oracle AI", href: "#oracle" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "Analytics", href: "#analytics" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-5xl transition-all duration-300 ${
          scrolled ? "py-0" : "py-1"
        }`}
      >
        <nav className="flex items-center justify-between gap-4 rounded-full bg-slate-900/70 p-2.5 sm:px-6 sm:py-3 backdrop-blur-2xl shadow-2xl shadow-black/60 border border-white/[0.08]">
          {/* Logo Mark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="font-extrabold tracking-tight text-white font-heading text-base sm:text-lg">
                R-zension
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider hidden sm:inline">
                ZENITH
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Action & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDemoModal}
              className="rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 px-4 sm:px-5 py-2 text-xs font-bold text-white shadow-lg shadow-cyan-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <span>Begin Ascension</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-white/[0.05] text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-3xl bg-slate-900/95 backdrop-blur-2xl p-6 shadow-2xl border border-white/10 space-y-4"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-sm font-semibold text-slate-300 hover:text-white border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25"
            >
              Begin Ascension
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}