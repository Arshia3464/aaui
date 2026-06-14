"use client";

import { useEffect, useState } from "react";

export default function DownloadButton() {
  const [progress, setProgress] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    setProgress(0);

    const duration = 6000;
    const start = performance.now();

    const animate = (t) => {
      const p = Math.min(((t - start) / duration) * 100, 100);
      setProgress(p);

      if (p < 100) requestAnimationFrame(animate);
      else setRunning(false);
    };

    requestAnimationFrame(animate);
  }, [running]);

  const size = 180;
  const stroke = 4;

  // rectangle path (rounded button border)
  const w = 160;
  const h = 56;
  const r = 14;

  const path = `
  M ${w / 2} 0
  H ${w - r}
  Q ${w} 0 ${w} ${r}
  V ${h - r}
  Q ${w} ${h} ${w - r} ${h}
  H ${r}
  Q 0 ${h} 0 ${h - r}
  V ${r}
  Q 0 0 ${r} 0
  H ${w / 2}
`;

  // approximate perimeter for dash animation
  const perimeter = 2 * (w + h);

  const offset = perimeter - (progress / 100) * perimeter;

  return (
    <button
      onClick={() => setRunning(true)}
      className="relative w-[160px] h-[56px] text-white font-semibold rounded-[14px] bg-zinc-900 hover:bg-zinc-800 transition"
    >
      {/* BORDER PROGRESS SVG */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${w} ${h}`}>
        <defs>
          <linearGradient id="borderGrad">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>

        {/* background border */}
        <path
          d={path}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={stroke}
        />

        {/* animated border */}
        <path
          d={path}
          fill="none"
          stroke="url(#borderGrad)"
          strokeWidth={stroke}
          strokeDasharray={perimeter}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 0.1s linear",
          }}
        />
      </svg>

      {/* label */}
      <span className="relative z-10 flex flex-col items-center leading-none">
        <span className="text-xs opacity-60">Download</span>
        <span className="text-sm">
          {running ? `${Math.round(progress)}%` : "Start"}
        </span>
      </span>
    </button>
  );
}
