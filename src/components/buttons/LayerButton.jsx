"use client";

export default function LayerButton({ children, onClick }) {
  return (
    <div className="relative inline-block group">
      {/* back layer 2 */}
      <div className="absolute inset-0 translate-x-1 -translate-y-1 rounded-sm border border-white/20 transition group-hover:translate-x-2 group-hover:-translate-y-2" />

      {/* back layer 1 */}
      <div className="absolute inset-0 translate-x-0.5 -translate-y-0.5 rounded-sm border border-white/20 transition group-hover:translate-x-1 group-hover:-translate-y-1" />

      {/* main button */}
      <button
        onClick={onClick}
        className="relative z-10 px-4 py-2 rounded-sm bg-zinc-900 border border-white/20 cursor-pointer backdrop-blur active:bg-zinc-700 transition"
      >
        {children}
      </button>
    </div>
  );
}
