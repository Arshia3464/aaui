import { HiArrowRight } from "react-icons/hi2";

export default function FigmaButton() {
  return (
    <button
      className="
        group relative flex cursor-pointer items-center gap-2
        rounded-xl border border-white/50
        px-8 py-3
        text-xl text-white
        transition-all duration-200
        hover:rounded-none
      "
    >
      <span
        className="
          transition-all duration-200
          group-hover:translate-x-2
        "
      >
        Button
      </span>

      <HiArrowRight
        size={20}
        className="
          absolute left-2 top-1/2
          -translate-y-1/2
          opacity-0
          transition-all duration-200
          group-hover:translate-x-2
          group-hover:opacity-100
        "
      />
    </button>
  );
}
