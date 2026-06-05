// app/not-found.tsx

import "./globals.css";
import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="relative min-h-screen overflow-hidden bg-zinc-950 text-white">
        {/* background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-3xl rounded-full" />

        {/* subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* radial fade */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(0,0,0,0.7))]" />

        {/* content */}
        <main className="relative z-10 flex items-center justify-center min-h-screen px-6">
          <div className="max-w-2xl text-center">
            {/* badge */}
            <div className="inline-flex items-center gap-2 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl px-4 py-1.5 text-sm text-zinc-300">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              404 Error
            </div>

            {/* giant 404 */}
            <h1 className="text-[120px] md:text-[180px] leading-none font-black tracking-tight bg-gradient-to-b from-white to-zinc-500 text-transparent bg-clip-text">
              404
            </h1>

            {/* title */}
            <h2 className="text-3xl md:text-5xl font-bold mt-6 mb-6">
              Page not found.
            </h2>

            {/* description */}
            <p className="text-zinc-400 text-lg leading-8 max-w-xl mx-auto mb-10">
              Either this page does not exist yet or it has not been built yeet.
            </p>

            {/* actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/en"
                className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-[1.02] transition-transform"
              >
                Go Home
              </Link>

              <Link
                href="/components"
                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:bg-white/[0.06] transition-colors"
              >
                Browse Components
              </Link>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
