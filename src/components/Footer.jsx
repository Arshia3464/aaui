"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative z-10 mt-40 border-t border-white/10">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-linear-to-t from-white/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl text-start mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* left */}
          <div className="text-start md:text-left">
            <h3 className="text-xl text-start font-semibold mb-2">
              {t("title")}
            </h3>

            <p className="text-sm text-zinc-500 text-start max-w-sm leading-6">
              {t("description")}
            </p>
          </div>

          {/* center links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link
              href="/components"
              className="hover:text-white transition-colors"
            >
              {t("links.components")}
            </Link>

            <Link href="/docs" className="hover:text-white transition-colors">
              {t("links.docs")}
            </Link>

            <Link
              href="/showcase"
              className="hover:text-white transition-colors"
            >
              {t("links.showcase")}
            </Link>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>{t("copyright")}</p>

          <p>{t("builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
