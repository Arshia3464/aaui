export default function Page() {
  return (
    <div className="space-y-12">
      {/* hero */}
      <div className="max-w-3xl">
        <div
          className="
            inline-flex items-center gap-2
            rounded-full border border-white/10
            bg-white/5
            px-4 py-1.5
            text-sm text-zinc-300
            backdrop-blur-xl
          "
        >
          Ready To Use Blocks
        </div>

        <h1 className="mt-6 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          بلاک‌های آماده رابط کاربری
        </h1>

        <p className="text-lg leading-8 text-zinc-400">
          مجموعه‌ای از بلاک‌ها و سکشن‌های آماده برای ساخت سریع صفحات مدرن،
          لندینگ پیج‌ها و رابط‌های کاربری حرفه‌ای با React و Tailwind CSS.
        </p>
      </div>

      {/* free to use */}
      <div
        className="
          relative overflow-hidden
          rounded-3xl border border-pink-500/20
          bg-linear-to-b
          from-pink-500/10
          via-pink-500/3
          to-transparent
          p-6
          backdrop-blur-xl
        "
      >
        {/* glow */}
        <div
          className="
            pointer-events-none absolute -top-10 left-1/2
            h-40 w-40 -translate-x-1/2
            rounded-full bg-pink-500/10 blur-3xl
          "
        />

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-pink-300">
              <span className="text-lg">♡</span>

              <span className="text-sm font-medium uppercase tracking-widest">
                Open & Free
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-semibold">
              استفاده کاملاً رایگان
            </h2>

            <p className="max-w-2xl leading-7 text-zinc-300">
              تمامی بلاک‌ها و سکشن‌های AAUI بدون محدودیت قابل استفاده هستند.
              می‌توانید آن‌ها را در پروژه‌های شخصی، تجاری و استارتاپی خود
              استفاده و مطابق نیازتان شخصی‌سازی کنید.
            </p>
          </div>

          <div
            className="
              flex h-16 w-16 items-center justify-center
              self-start rounded-2xl
              border border-pink-500/20
              bg-pink-500/10
              text-3xl
            "
          >
            ❤
          </div>
        </div>
      </div>

      {/* highlight */}
      <div
        className="
          relative overflow-hidden
          rounded-3xl border border-cyan-500/20
          bg-linear-to-b
          from-cyan-500/10
          via-cyan-500/3
          to-transparent
          p-6
          backdrop-blur-xl
        "
      >
        {/* glow */}
        <div
          className="
            pointer-events-none absolute -top-10 left-1/2
            h-40 w-40 -translate-x-1/2
            rounded-full bg-cyan-500/10 blur-3xl
          "
        />

        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-cyan-300">
              <span className="text-lg">✦</span>

              <span className="text-sm font-medium uppercase tracking-widest">
                Production Ready
              </span>
            </div>

            <h2 className="mb-2 text-2xl font-semibold">
              آماده برای پروژه‌های واقعی
            </h2>

            <p className="max-w-2xl leading-7 text-zinc-300">
              تمامی بلاک‌ها با تمرکز روی طراحی مدرن، تجربه کاربری و ساختار تمیز
              ساخته شده‌اند تا بتوانید سریع‌تر صفحات حرفه‌ای و زیبا ایجاد کنید.
            </p>
          </div>

          <div
            className="
              flex h-16 w-16 items-center justify-center
              self-start rounded-2xl
              border border-cyan-500/20
              bg-cyan-500/10
              text-3xl
            "
          >
            ⚡
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* sections */}
        <div
          className="
            rounded-3xl border border-white/10
            bg-zinc-900/30
            p-6
            backdrop-blur-xl
          "
        >
          <div
            className="
              mb-4 flex h-12 w-12 items-center
              justify-center rounded-2xl
              border border-white/10
              bg-white/5 text-xl
            "
          >
            🧩
          </div>

          <h2 className="mb-3 text-xl font-semibold">سکشن‌های آماده</h2>

          <p className="leading-7 text-zinc-400">
            مجموعه‌ای از Hero، فرم‌ها، بخش ویژگی‌ها، CTA، Navbar و دیگر سکشن‌های
            کاربردی برای ساخت سریع صفحات مدرن و حرفه‌ای.
          </p>
        </div>

        {/* customization */}
        <div
          className="
            rounded-3xl border border-white/10
            bg-zinc-900/30
            p-6
            backdrop-blur-xl
          "
        >
          <div
            className="
              mb-4 flex h-12 w-12 items-center
              justify-center rounded-2xl
              border border-white/10
              bg-white/5 text-xl
            "
          >
            🎨
          </div>

          <h2 className="mb-3 text-xl font-semibold">شخصی‌سازی آسان</h2>

          <p className="leading-7 text-zinc-400">
            تمامی بلاک‌ها ساختار ساده و تمیزی دارند و می‌توانید رنگ‌ها،
            فاصله‌ها، متن‌ها و انیمیشن‌ها را مطابق نیاز پروژه تغییر دهید.
          </p>
        </div>
      </div>

      {/* examples */}
      <div
        className="
          rounded-3xl border border-white/10
          bg-linear-to-b
          from-white/3
          to-transparent
          p-8
        "
      >
        <h2 className="mb-6 text-2xl font-semibold">
          چه چیزهایی داخل Blocks وجود دارد؟
        </h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">فرم‌های مدرن</h3>

            <p className="text-sm leading-6 text-zinc-400">
              فرم‌های ورود، ثبت‌نام و تماس با طراحی مدرن و اعتبارسنجی حرفه‌ای.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">Hero Section</h3>

            <p className="text-sm leading-6 text-zinc-400">
              سکشن‌های شروع صفحه با گرادینت، دکمه‌های CTA و طراحی مناسب برای
              لندینگ پیج‌ها.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">بخش ویژگی‌ها</h3>

            <p className="text-sm leading-6 text-zinc-400">
              کارت‌ها و سکشن‌های معرفی امکانات برای نمایش ویژگی‌های محصول یا
              سرویس.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">طراحی ریسپانسیو</h3>

            <p className="text-sm leading-6 text-zinc-400">
              تمامی بلاک‌ها برای موبایل، تبلت و دسکتاپ بهینه شده‌اند.
            </p>
          </div>
        </div>
      </div>

      {/* guide */}
      <div
        className="
          rounded-3xl border border-white/10
          bg-zinc-900/20
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-6 text-2xl font-semibold">نحوه استفاده</h2>

        <div className="space-y-4 text-zinc-400">
          <p>• بلاک موردنظر خود را انتخاب کرده و کد آن را کپی کنید.</p>

          <p>
            • ساختار بلاک‌ها به‌صورت ماژولار طراحی شده و می‌توانید بخش‌های مختلف
            را حذف یا تغییر دهید.
          </p>

          <p>
            • برخی بلاک‌ها ممکن است از{" "}
            <span className="text-white">Framer Motion</span> برای انیمیشن‌ها
            استفاده کنند.
          </p>

          <p>• تمامی بلاک‌ها با React، Next.js و Tailwind CSS ساخته شده‌اند.</p>
        </div>
      </div>
    </div>
  );
}
