import { Sparkles, ArrowUp, FileText, Code2, Radio } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950/80 backdrop-blur-2xl border-t border-white/[0.06] pt-16 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-slate-400 text-xs">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
        {/* Brand Info */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-violet-600 p-0.5">
              <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold tracking-tight text-white font-heading text-lg">
              R-zension
            </span>
          </div>

          <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
            Rank &bull; Zenith &bull; Ascension. Autonomous competitive intelligence platform delivering continuous market supremacy for technology enterprises.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] text-cyan-400 text-[11px] font-mono w-fit border border-white/[0.06]">
            <Radio className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>Powered by Ascension Oracle</span>
          </div>
        </div>

        {/* Platform Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Platform</h4>
          <ul className="space-y-2">
            <li><a href="#oracle" className="hover:text-white transition-colors">Oracle AI Control</a></li>
            <li><a href="#leaderboard" className="hover:text-white transition-colors">Zenith Leaderboard</a></li>
            <li><a href="#analytics" className="hover:text-white transition-colors">Telemetry Analytics</a></li>
            <li><a href="#how-it-works" className="hover:text-white transition-colors">User Journey</a></li>
          </ul>
        </div>

        {/* Developer & Resource Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Developers</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1.5"><FileText className="w-3 h-3" /> Documentation</a></li>
            <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1.5"><Code2 className="w-3 h-3" /> REST & Telemetry API</a></li>
            <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Product Roadmap</a></li>
          </ul>
        </div>

        {/* Legal & Trust Links */}
        <div className="space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-[11px] font-mono">Governance</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Security Overview</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Legal & Back to Top */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
        <div>
          &copy; {new Date().getFullYear()} R-zension Technologies Inc. All rights reserved. Rise. Analyze. Ascend.
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-all font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
