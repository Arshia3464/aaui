"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/components/navigation";
import TechStack from "./TechStack";
import FeaturesSection from "./Features";

// Floating code tokens that drift in the background
const TOKENS = [
  {
    text: "import { Button }",
    cls: "text-[var(--foreground)] border-[color:var(--foreground)]/25 bg-[color:var(--background)]/10",
    pos: "top-[18%] left-[7%]",
    delay: 0.2,
    dur: 9,
  },
  {
    text: "export default",
    cls: "text-[color:var(--foreground)]/35 border-[color:var(--foreground)]/10 bg-[color:var(--background)]/4",
    pos: "top-[32%] left-[3%]",
    delay: 0.5,
    dur: 7,
  },
  {
    text: "<Modal />",
    cls: "text-[color:var(--foreground)]/30 border-[color:var(--foreground)]/20 bg-[color:var(--background)]/8",
    pos: "top-[55%] left-[6%]",
    delay: 0.8,
    dur: 11,
  },
  {
    text: "useAnimation()",
    cls: "text-[var(--foreground)] border-[color:var(--foreground)]/25 bg-[color:var(--background)]/10",
    pos: "top-[22%] right-[8%]",
    delay: 0.3,
    dur: 8,
  },
  {
    text: "const theme =",
    cls: "text-[color:var(--foreground)]/35 border-[color:var(--foreground)]/10 bg-[color:var(--background)]/4",
    pos: "top-[42%] right-[4%]",
    delay: 0.6,
    dur: 10,
  },
  {
    text: "framer-motion",
    cls: "text-[color:var(--foreground)]/30 border-[color:var(--foreground)]/20 bg-[color:var(--background)]/8",
    pos: "top-[65%] right-[7%]",
    delay: 1.0,
    dur: 7,
  },
];

export default function Home() {
  const t = useTranslations("home-page");

  return (
    <>
      <div className="relative overflow-hidden">
        {/* ── background layers ── */}

        {/* dot-grid mesh */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.08) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />

        {/* big violet/fuchsia orb */}
        <motion.div
          className="pointer-events-none absolute left-1/2 -top-32 h-[700px] w-[700px] -translate-x-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 40% 40%, rgba(232,121,249,0.18) 0%, rgba(124,58,237,0.22) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* ── floating code tokens ── */}
        {TOKENS.map(({ text, cls, pos, delay, dur }) => (
          <motion.span
            key={text}
            dir="ltr"
            className={`pointer-events-none absolute hidden lg:block font-mono text-xs border rounded-md px-2.5 py-1 ${pos} ${cls}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { delay, duration: 0.6 },
              y: { delay, duration: dur, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            {text}
          </motion.span>
        ))}

        {/* ── content ── */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 py-40 text-center">
          {/* eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center gap-2 rounded-full border border-[color:var(--foreground)]/30 bg-[color:var(--background)]/15 px-4 py-1.5"
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-[var(--foreground)]"
              style={{ boxShadow: "0 0 8px 2px rgba(167,139,250,0.6)" }}
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="font-mono text-xs text-[var(--foreground)]">
              v0.1.0-beta · Work in progress
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-6 text-[clamp(40px,7vw,80px)] font-black leading-none tracking-[-0.04em]"
          >
            <span className="text-[var(--foreground)]">{t("title")}&nbsp;</span>
            <span className="bg-gradient-to-br from-violet-400 via-fuchsia-400 to-orange-400 bg-clip-text text-transparent">
              {t("title-accent")}
            </span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-10 max-w-md text-lg leading-relaxed text-[color:var(--foreground)]/70"
          >
            {t("description")}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mb-16 flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/components"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(124,58,237,0.5)]"
            >
              {t("button")}
              <span className="transition-transform duration-150 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-xl border border-[color:var(--foreground)]/10 bg-transparent px-7 py-3.5 text-sm font-medium text-[color:var(--foreground)]/70 transition-all duration-150 hover:border-[color:var(--foreground)]/20 hover:bg-[color:var(--background)]/5 hover:text-[var(--foreground)]"
            >
              View on GitHub
            </a>
          </motion.div>

          {/* stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              {
                value: "80+",
                label: "Components",
                accent: "from-violet-400 to-violet-600",
              },
              {
                value: "Zero",
                label: "Config needed",
                accent: "from-fuchsia-400 to-purple-500",
              },
              {
                value: "A11y",
                label: "Ready",
                accent: "from-orange-400 to-amber-500",
              },
            ].map(({ value, label, accent }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-[color:var(--foreground)]/[0.08] bg-[color:var(--background)]/4 px-5 py-3"
              >
                <div
                  className={`h-6 w-1 rounded-full bg-gradient-to-b ${accent}`}
                />
                <div>
                  <p className="text-lg font-bold leading-none tracking-tight text-[var(--foreground)]">
                    {value}
                  </p>
                  <p className="mt-0.5 text-xs text-[color:var(--foreground)]/50">
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* fade-down separator line */}
        <motion.div
          className="pointer-events-none absolute bottom-0 left-1/2 h-20 w-px -translate-x-1/2 bg-gradient-to-b from-violet-400/40 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        />
      </div>
      <TechStack />
      <FeaturesSection />
    </>
  );
}
