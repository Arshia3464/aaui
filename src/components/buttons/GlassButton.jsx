"use client";

export default function GlassButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded-lg cursor-pointer bg-white/10 backdrop-blur hover:bg-white/20 hover:scale-102 transition active:scale-96"
    >
      {children}
    </button>
  );
}
