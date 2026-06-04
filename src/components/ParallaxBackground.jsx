"use client";

import { useEffect, useRef } from "react";

export default function ParallaxBackground() {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(-30%, -30%) translateY(${scrollY * -0.15}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(30%, 30%) translateY(${scrollY * 0.1}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        ref={orb1Ref}
        className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--primary) / 0.35), hsl(var(--primary) / 0.05) 70%)",
          filter: "blur(80px)",
          transform: "translate(-30%, -30%)",
          willChange: "transform",
          transition: "transform 0.1s linear",
        }}
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at center, hsl(var(--chart-2) / 0.3), hsl(var(--chart-2) / 0.04) 70%)",
          filter: "blur(100px)",
          transform: "translate(30%, 30%)",
          willChange: "transform",
          transition: "transform 0.1s linear",
        }}
      />
    </div>
  );
}
