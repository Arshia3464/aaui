"use client";
import LocaleSwitcher from "./LocaleSwitcher";
import { useTranslations } from "next-intl";

import { Link } from "./navigation";
export default function Navbar() {
  const t = useTranslations("nav");
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-900/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-2xl font-extrabold">
          <a href="/">AAUI</a>
        </div>

        <nav className="flex items-center gap-8 text-sm text-zinc-400">
          <Link href="/components" className="hover:text-white">
            {t("components")}
          </Link>
          <Link href="/blocks" className="hover:text-white">
            {t("blocks")}
          </Link>
          <Link href="/layouts" className="hover:text-white">
            {t("layouts")}
          </Link>
          <Link href="/docs" className="hover:text-white">
            {t("docs")}
          </Link>
          <LocaleSwitcher />
        </nav>
      </div>
    </header>
  );
}
