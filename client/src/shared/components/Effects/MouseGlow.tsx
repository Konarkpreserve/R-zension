import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [{ x, y }, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-30"
      style={{
        background: `radial-gradient(
          134px circle at ${x}px ${y}px,
          rgba(56,189,248,0.12),
          transparent 90%
        )`,
      }}
    />
  );
}