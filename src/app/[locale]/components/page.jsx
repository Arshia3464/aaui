import FadeUp from "@/components/FadeUp";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("components-page");

  return (
    <div className="space-y-12">
      {/* hero */}
      <FadeUp>
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
            Modern UI Library
          </div>

          <h1 className="mt-6 mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            {t("title")}
          </h1>

          <p className="text-lg leading-8 text-zinc-400">{t("description")}</p>
        </div>
      </FadeUp>

      {/* free to use */}
      <FadeUp delay={0.2}>
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
                تمامی کامپوننت‌ها و بلاک‌های AAUI بدون محدودیت قابل استفاده
                هستند. می‌توانید آن‌ها را در پروژه‌های شخصی، تجاری و استارتاپی
                خود استفاده و شخصی‌سازی کنید.
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
      </FadeUp>

      {/* info grid */}
      <FadeUp delay={0.4}>
        <div className="grid gap-6 md:grid-cols-2">
          {/* preview */}
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
              ✨
            </div>

            <h2 className="mb-3 text-xl font-semibold">پیش‌نمایش زنده</h2>

            <p className="leading-7 text-zinc-400">
              تمامی کامپوننت‌ها همراه با پیش‌نمایش زنده ارائه می‌شوند تا بتوانید
              رفتار، انیمیشن‌ها و تعاملات آن‌ها را قبل از استفاده مشاهده کنید.
            </p>
          </div>

          {/* code */}
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
              {"</>"}
            </div>

            <h2 className="mb-3 text-xl font-semibold">کد آماده استفاده</h2>

            <p className="leading-7 text-zinc-400">
              کد تمامی کامپوننت‌ها تمیز، ساده و آماده استفاده در پروژه‌های واقعی
              است. کافی است کپی کنید و مطابق نیاز خود شخصی‌سازی کنید.
            </p>
          </div>
        </div>
      </FadeUp>

      {/* features */}
      <div
        className="
          rounded-3xl border border-white/10
          bg-gradient-to-b
          from-white/[0.03]
          to-transparent
          p-8
        "
      >
        <h2 className="mb-6 text-2xl font-semibold">امکانات</h2>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">کامپوننت‌های مدرن</h3>

            <p className="text-sm leading-6 text-zinc-400">
              مجموعه‌ای از Button، Input، Form و بخش‌های آماده برای ساخت رابط
              کاربری مدرن.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">طراحی ریسپانسیو</h3>

            <p className="text-sm leading-6 text-zinc-400">
              تمامی کامپوننت‌ها برای موبایل، تبلت و دسکتاپ بهینه شده‌اند.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">قابل شخصی‌سازی</h3>

            <p className="text-sm leading-6 text-zinc-400">
              رنگ‌ها، فاصله‌ها، انیمیشن‌ها و استایل‌ها به‌راحتی قابل تغییر
              هستند.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
            <h3 className="mb-2 font-medium">ساخته شده با تکنولوژی مدرن</h3>

            <p className="text-sm leading-6 text-zinc-400">
              توسعه یافته با React، Next.js، Tailwind CSS و Framer Motion.
            </p>
          </div>
        </div>
      </div>

      {/* quick guide */}
      <div
        className="
          rounded-3xl border border-white/10
          bg-zinc-900/20
          p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-6 text-2xl font-semibold">راهنمای سریع</h2>

        <div className="space-y-4 text-zinc-400">
          <p>
            • {t("previewText")}{" "}
            <span className="font-medium text-white">Preview</span>
          </p>

          <p>
            • {t("codeText")}{" "}
            <span className="font-medium text-white">Code</span>
          </p>

          <p>• {t("themeText")}</p>

          <p>
            • {t("resetText")}{" "}
            <span className="font-medium text-white">Reset</span>
          </p>
        </div>
      </div>
    </div>
  );
}
