"use client";

export default function FlipCard({
  image = "/test.png",
  name = "آرشیا",
  role = "Frontend Developer",
  description = "علاقه‌مند به طراحی رابط‌های کاربری مدرن، انیمیشن‌های نرم و تجربه کاربری حرفه‌ای.",
}) {
  return (
    <div
      className="
        group h-[420px] w-[320px]
        [perspective:1200px]
      "
    >
      <div
        className="
          relative h-full w-full
          transition-transform duration-700
          [transform-style:preserve-3d]
          group-hover:[transform:rotateY(180deg)]
        "
      >
        {/* front */}
        <div
          className="
            absolute inset-0 overflow-hidden
            rounded-3xl border border-white/10
            bg-zinc-900
            [backface-visibility:hidden]
            [-webkit-backface-visibility:hidden]
          "
        >
          {/* image */}
          <img src={image} alt={name} className="h-full w-full object-cover" />

          {/* overlay */}
          <div
            className="
              absolute inset-0
              bg-linear-to-t
              from-black/90
              via-black/30
              to-transparent
            "
          />

          {/* front content */}
          <div
            className="
              absolute bottom-0 z-10 p-6
              transition-all duration-500
              group-hover:translate-y-2
              group-hover:opacity-0
            "
          >
            <p className="mb-2 text-sm text-zinc-300">{role}</p>

            <h3 className="text-3xl font-bold text-white">{name}</h3>
          </div>
        </div>

        {/* back */}
        <div
          className="
            absolute inset-0 overflow-hidden
            rounded-3xl border border-white/10
            bg-zinc-900
            [transform:rotateY(180deg)]
            [backface-visibility:hidden]
            [-webkit-backface-visibility:hidden]
          "
        >
          {/* background image */}
          <img
            src={image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* dark overlay */}
          <div
            className="
              absolute inset-0
              bg-black/75
              backdrop-blur-[2px]
            "
          />

          {/* glow */}
          <div
            className="
              absolute inset-0
              bg-linear-to-br
              from-purple-500/10
              via-transparent
              to-cyan-500/10
            "
          />

          {/* back content */}
          <div
            className="
              relative z-10 flex h-full flex-col justify-between p-8
              translate-y-2 opacity-0
              transition-all duration-300 delay-150
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            <div>
              <div
                className="
                  mb-5 inline-flex items-center gap-2
                  rounded-full border border-white/10
                  bg-white/[0.04]
                  px-3 py-1 text-xs text-zinc-300
                  backdrop-blur-md
                "
              >
                <div className="h-2 w-2 rounded-full bg-purple-400" />
                Profile
              </div>

              <h3 className="mb-3 text-3xl font-bold text-white">{name}</h3>

              <p className="mb-6 text-zinc-300">{role}</p>

              <p className="leading-8 text-zinc-200">{description}</p>
            </div>

            <button
              className="
                rounded-2xl border border-white/10
                bg-white/[0.08]
                px-5 py-3
                text-white backdrop-blur-md
                transition-colors
                hover:bg-white/[0.12]
              "
            >
              مشاهده پروفایل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
