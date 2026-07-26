import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, Building2, User, Mail } from "lucide-react";
import type { EarlyAccessFormData } from "../../../types";

const earlyAccessSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  workEmail: z.string().email("Please enter a valid work email address"),
  organizationName: z.string().min(2, "Organization name is required"),
  teamSize: z.string().min(1, "Please select your team size"),
  primaryGoal: z.string().min(1, "Please select your primary growth goal"),
});

interface EarlyAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<EarlyAccessFormData>({
    resolver: zodResolver(earlyAccessSchema),
    defaultValues: {
      teamSize: "10-50",
      primaryGoal: "Market Velocity & Competitive Ranking",
    },
  });

  const onSubmit = (data: EarlyAccessFormData) => {
    console.log("Demo Request Submitted:", data);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleResetAndClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-lg rounded-3xl bg-slate-900/90 backdrop-blur-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-950/40 overflow-hidden border border-white/[0.08]"
          >
            {/* Top Glow Accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-400" />

            {/* Close Button */}
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/[0.05] text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Request Priority Ascension Access</span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading mb-2">Begin Your Ascension</h3>
                <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                  Join leading technology enterprises experiencing continuous strategic intelligence with Ascension Oracle.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        {...register("fullName")}
                        placeholder="Alex Vance"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
                      />
                    </div>
                    {errors.fullName && <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName.message}</span>}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Work Email</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        {...register("workEmail")}
                        type="email"
                        placeholder="alex@enterprise.com"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
                      />
                    </div>
                    {errors.workEmail && <span className="text-[11px] text-rose-400 mt-1 block">{errors.workEmail.message}</span>}
                  </div>

                  {/* Organization Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">Organization Name</label>
                    <div className="relative">
                      <Building2 className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        {...register("organizationName")}
                        placeholder="Aura Systems Inc."
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.03] text-white placeholder:text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
                      />
                    </div>
                    {errors.organizationName && <span className="text-[11px] text-rose-400 mt-1 block">{errors.organizationName.message}</span>}
                  </div>

                  {/* Grid for Team Size & Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Team Size</label>
                      <select
                        {...register("teamSize")}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
                      >
                        <option value="1-10">1-10 employees</option>
                        <option value="10-50">10-50 employees</option>
                        <option value="50-250">50-250 employees</option>
                        <option value="250+">250+ Enterprise</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">Primary Objective</label>
                      <select
                        {...register("primaryGoal")}
                        className="w-full px-3 py-2.5 rounded-xl bg-slate-900 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50 border border-white/[0.06]"
                      >
                        <option value="Market Velocity">Market Velocity</option>
                        <option value="Oracle Intelligence">Oracle Intelligence</option>
                        <option value="Competitor Defense">Competitor Defense</option>
                        <option value="Zenith Tier Rank">Zenith Tier Rank</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-4 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    <span>Request Ascension Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 mt-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Enterprise Grade • Zero Spam • Strict Privacy</span>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Confirmation Screen */
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto shadow-inner shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-heading">Access Directive Confirmed</h3>
                <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                  Thank you. Our executive team has reserved your priority placement in the Ascension Oracle deployment schedule.
                </p>
                <div className="p-4 rounded-2xl bg-white/[0.03] text-xs font-mono text-cyan-400 inline-block">
                  Priority Vector: ACTIVE • Queue Slot #142
                </div>
                <div>
                  <button
                    onClick={handleResetAndClose}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
                  >
                    Return to Platform Experience
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
