"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchLocale(nextLocale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const nextPath = segments.join("/");

    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  }

  return (
    <>
      {locale === "en" && (
        <button className="cursor-pointer" onClick={() => switchLocale("fa")}>
          فارسی
        </button>
      )}

      {locale === "fa" && (
        <button className="cursor-pointer" onClick={() => switchLocale("en")}>
          English
        </button>
      )}
    </>
  );
}
export function LocaleSwitcherr() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function switchLocale(nextLocale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    const nextPath = segments.join("/");

    const query = searchParams.toString();
    router.push(query ? `${nextPath}?${query}` : nextPath);
  }

  return (
    <div className="flex items-center border border-zinc-200 dark:border-zinc-800 rounded-full p-1 bg-white dark:bg-zinc-900 shadow-sm">
      <button
        onClick={() => switchLocale("en")}
        className={`px-3 py-1 text-sm rounded-full transition ${
          locale === "en"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
        }`}
      >
        English
      </button>

      <button
        onClick={() => switchLocale("fa")}
        className={`px-3 py-1 text-sm rounded-full transition ${
          locale === "fa"
            ? "bg-zinc-900 text-white dark:bg-white dark:text-black"
            : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
        }`}
      >
        فارسی
      </button>
    </div>
  );
}
