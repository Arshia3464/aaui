"use client";

export default function FloatingLabelInput() {
  return (
    <div className="relative w-[320px] rounded-xl bg-zinc-900 text-right">
      <input
        type="text"
        placeholder=" "
        className="
          peer h-14 w-full
          rounded-xl border border-white/10
          bg-transparent
          px-4 py-5 
          text-right text-white
          outline-none
          transition-colors duration-200
          focus:border-white/30
        "
      />

      <label
        className="
          pointer-events-none absolute
          right-3 top-1/2 rounded-full
          -translate-y-1/2
          bg-zinc-900 px-1
          text-sm text-zinc-500
          transition-all duration-200

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-white

          peer-not-placeholder-shown:top-0
          peer-not-placeholder-shown:text-xs
          peer-not-placeholder-shown:text-white
        "
      >
        نام و نام خانوادگی
      </label>
    </div>
  );
}
