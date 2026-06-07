"use client";

export default function GlassCard({
  badge = "ویژه",
  title = "داشبورد مدیریت مدرن",
  description = "یک کارت مدرن مناسب برای داشبوردها، صفحات فرود و رابط‌های کاربری امروزی.",
  buttonText = "مشاهده پروژه",
  footerText = "کامپوننت React",
}) {
  return (
    <div
      className="
        group relative w-[340px] overflow-hidden
        rounded-3xl border border-white/10
        bg-white/[0.03]
        p-6
        backdrop-blur-2xl
        transition-all duration-300
        hover:border-white/20
      "
    >
      {/* glow */}
      <div
        className="
          absolute inset-0 opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          bg-linear-to-br
          from-purple-500/10
          via-transparent
          to-cyan-500/10
        "
      />

      {/* content */}
      <div className="relative z-10">
        {/* badge */}
        <div
          className="
            mb-4 inline-flex items-center gap-2
            rounded-full border border-white/10
            bg-white/[0.04]
            px-3 py-1 text-xs text-zinc-300
          "
        >
          <div className="h-2 w-2 rounded-full bg-emerald-400" />
          {badge}
        </div>

        {/* title */}
        <h3 className="mb-3 text-xl font-bold">{title}</h3>

        {/* description */}
        <p className="mb-6 text-sm leading-7 text-zinc-400">{description}</p>

        {/* footer */}
        <div className="flex items-center justify-between gap-4">
          <button
            className="
              rounded-2xl bg-white px-4 py-2
              text-sm font-medium text-black
              transition-transform hover:scale-[1.02]
            "
          >
            {buttonText}
          </button>

          <span className="text-xs text-zinc-500">{footerText}</span>
        </div>
      </div>
    </div>
  );
}
