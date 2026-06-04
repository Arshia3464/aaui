"use client";

import { useEffect, useRef, useState } from "react";

export default function GlowButton({
  children,
  glowDelay = 2000,
  glowDuration = 2000,
  className = "",
  onClick,
}) {
  const [glow, setGlow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let delayTimeout;
    let durationTimeout;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          delayTimeout = setTimeout(() => {
            setGlow(true);

            durationTimeout = setTimeout(() => {
              setGlow(false);
            }, glowDuration);
          }, glowDelay);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
      clearTimeout(delayTimeout);
      clearTimeout(durationTimeout);
    };
  }, [glowDelay, glowDuration]);

  return (
    <div ref={ref} className="relative inline-block">
      {/* glow */}
      <div
        className={`absolute inset-0 rounded-lg blur-xl scale-125 transition-opacity duration-1000 ${
          glow ? "opacity-100 bg-amber-400/30" : "opacity-0"
        }`}
      />

      <button
        className={`
            cursor-pointer
          relative
          px-5 py-2.5
          rounded-lg
          bg-zinc-900
          border border-white/15
          text-white
          transition-all duration-300
          hover:scale-105
          hover:bg-zinc-800
          active:scale-95
          ${className}
        `}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}
