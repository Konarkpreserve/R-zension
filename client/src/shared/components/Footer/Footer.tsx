import { Sparkles } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070a10] text-slate-400 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        {/* Brand & Motto */}
        <div className="md:col-span-5 space-y-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 p-[1px]">
              <div className="w-full h-full bg-[#070a10] rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="font-heading font-bold text-xl text-white tracking-tight">
              R-zension
            </span>
          </div>

          <p className="text-xs font-mono text-cyan-400">
            Ascension Oracle Intelligence OS
          </p>

          <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
            "Measure Progress. Unlock Potential. Ascend with Intelligence."
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-left text-xs">
          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#vision" className="hover:text-white transition-colors">Vision</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Problem</a></li>
              <li><a href="#oracle" className="hover:text-white transition-colors">Ascension Oracle</a></li>
              <li><a href="#competition" className="hover:text-white transition-colors">Competition</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-4">
              Architecture
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#preview" className="hover:text-white transition-colors">Live Preview</a></li>
              <li><a href="#growth" className="hover:text-white transition-colors">Growth Analytics</a></li>
              <li><a href="#built-for" className="hover:text-white transition-colors">Built For</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Design System</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white uppercase tracking-wider mb-4">
              Engineering
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Project Bible</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coding Standards</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Glossary</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
        <span>&copy; {new Date().getFullYear()} R-zension. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Security Specification</a>
        </div>
      </div>
    </footer>
  );
}
