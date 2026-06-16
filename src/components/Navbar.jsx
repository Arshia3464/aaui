"use client";

import { useState } from "react";

import LocaleSwitcher from "./LocaleSwitcher";

import { useTranslations } from "next-intl";

import { Link } from "./navigation";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const t = useTranslations("nav");

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/20 bg-background/20 backdrop-blur-xl">
      <div className="px-2 flex h-16 w-full items-center justify-between px-6">
        {/* logo */}
        <div className="text-2xl font-extrabold">
          <a href="/">AAUI</a>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/60">
          <Link
            href="/components"
            className="hover:text-foreground transition-colors"
          >
            {t("components")}
          </Link>

          <Link
            href="/blocks"
            className="hover:text-foreground transition-colors"
          >
            {t("blocks")}
          </Link>

          <Link
            href="/showcase"
            className="hover:text-foreground transition-colors"
          >
            {t("layouts")}
          </Link>

          <Link
            href="/docs"
            className="hover:text-foreground transition-colors"
          >
            {t("docs")}
          </Link>

          <LocaleSwitcher />
        </nav>

        {/* mobile actions */}
        <div className="flex md:hidden items-center gap-3">
          <LocaleSwitcher />

          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-foreground/10 bg-foreground/5 text-foreground"
          >
            {open ? <HiX size={22} /> : <HiOutlineMenuAlt3 size={22} />}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-foreground/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-5 text-sm text-foreground/60 bg-background/95 backdrop-blur-xl">
          <Link
            href="/components"
            className="py-3 hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("components")}
          </Link>

          <Link
            href="/blocks"
            className="py-3 hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("blocks")}
          </Link>

          <Link
            href="/layouts"
            className="py-3 hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("layouts")}
          </Link>

          <Link
            href="/docs"
            className="py-3 hover:text-foreground transition-colors"
            onClick={() => setOpen(false)}
          >
            {t("docs")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
