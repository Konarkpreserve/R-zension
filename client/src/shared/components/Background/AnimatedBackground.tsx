export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#070a10]">
      {/* Aurora Layer 1: Cyan Lighting Mesh */}
      <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-transparent blur-[140px] animate-aurora" />

      {/* Aurora Layer 2: Violet Lighting Mesh */}
      <div className="absolute top-[30%] -right-[15%] w-[55%] h-[55%] rounded-full bg-gradient-to-bl from-violet-600/15 via-purple-600/10 to-transparent blur-[140px] animate-aurora" style={{ animationDelay: "-6s" }} />

      {/* Aurora Layer 3: Deep Emerald Highlight Mesh */}
      <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-emerald-600/10 via-teal-600/5 to-transparent blur-[140px] animate-aurora" style={{ animationDelay: "-12s" }} />

      {/* Subtle Grid Lines Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
    </div>
  );
}