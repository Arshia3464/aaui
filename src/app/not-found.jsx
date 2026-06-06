// app/not-found.tsx

import "./globals.css";

import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="fa" dir="rtl">
      <body className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
        {/* background glow */}
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.75))]" />

        {/* content */}
        <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-xl text-center">
            {/* badge */}
            <div
              className="
                mb-6 inline-flex items-center gap-2
                rounded-full border border-white/10
                bg-white/[0.03]
                px-4 py-1.5
                text-sm text-zinc-300
                backdrop-blur-xl
              "
            >
              <div className="h-2 w-2 rounded-full bg-red-400" />
              صفحه پیدا نشد
            </div>

            {/* 404 */}
            <h1
              className="
                bg-gradient-to-b from-white to-zinc-600
                bg-clip-text text-[90px]
                font-black leading-none text-transparent
                md:text-[140px]
              "
            >
              404
            </h1>

            {/* title */}
            <h2 className="mt-5 mb-4 text-2xl font-bold md:text-4xl">
              این صفحه وجود ندارد
            </h2>

            {/* description */}
            <p className="mx-auto mb-8 max-w-md leading-8 text-zinc-400">
              ممکن است آدرس اشتباه باشد یا صفحه هنوز ساخته نشده باشد.
            </p>

            {/* actions */}
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/fa"
                className="
                  rounded-2xl bg-white px-5 py-3
                  font-medium text-black
                  transition-transform hover:scale-[1.02]
                "
              >
                بازگشت به خانه
              </Link>

              <Link
                href="/fa/components"
                className="
                  rounded-2xl border border-white/10
                  bg-white/[0.03]
                  px-5 py-3
                  backdrop-blur-xl
                  transition-colors hover:bg-white/[0.06]
                "
              >
                مشاهده کامپوننت‌ها
              </Link>
            </div>

            {/* tiny text */}
            <p className="mt-8 text-sm text-zinc-500">
              ساخته شده با ♡ توسط AAUI
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
