"use client";

import Link from "next/link";

import { useTranslations } from "next-intl";

import { FaGithub, FaTwitter, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative z-10 mt-10 border-t border-purple-500/10">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-purple-500/5 via-fuchsia-500/2 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* left */}
          <div className="text-start md:text-left">
            <h3 className="mb-2 text-xl font-semibold text-white">
              {t("title")}
            </h3>

            <p className="max-w-sm text-sm leading-6 text-zinc-400">
              {t("description")}
            </p>
          </div>

          {/* center links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link
              href="/components"
              className="transition-colors hover:text-purple-300"
            >
              {t("links.components")}
            </Link>

            <Link
              href="/docs"
              className="transition-colors hover:text-purple-300"
            >
              {t("links.docs")}
            </Link>

            <Link
              href="/showcase"
              className="transition-colors hover:text-purple-300"
            >
              {t("links.showcase")}
            </Link>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Arshia3464/aaui"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-purple-500/20
                bg-white/5 text-zinc-400
                backdrop-blur-md transition-all
                hover:bg-purple-500/10 hover:text-white hover:border-purple-400/30
              "
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://t.me/arshiabds"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex h-10 w-10 items-center justify-center
                rounded-xl border border-purple-500/20
                bg-white/5 text-zinc-400
                backdrop-blur-md transition-all
                hover:bg-purple-500/10 hover:text-white hover:border-purple-400/30
              "
            >
              <FaTelegramPlane size={18} />
            </a>
          </div>
        </div>

        {/* bottom */}
        <div
          className="
            mt-10 flex flex-col items-center justify-between
            gap-5 border-t border-purple-500/5
            pt-6 text-sm
            md:flex-row
          "
        >
          <p className="text-zinc-500">{t("copyright")}</p>

          <p className="flex items-center gap-2 text-zinc-400">
            ساخته شده با
            <span className="text-pink-400">♡</span>
            توسط
            <span
              className="
                bg-linear-to-r from-purple-300 to-fuchsia-400
                bg-clip-text font-semibold
                text-transparent
              "
            >
              Arshia
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
