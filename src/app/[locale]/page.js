"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/components/navigation";
import { FaJs, FaReact } from "react-icons/fa";
import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { useState } from "react";

// ─── TECH STACK ────────────────────────────────────────────────────────────────

function TechStack() {
  const t = useTranslations("tech-stack");
  const shouldReduceMotion = useReducedMotion();

  const stack = [
    {
      name: t("items.javascript.name"),
      icon: FaJs,
      description: t("items.javascript.description"),
      code: t("items.javascript.code"),
    },
    {
      name: t("items.react.name"),
      icon: FaReact,
      description: t("items.react.description"),
      code: t("items.react.code"),
    },
    {
      name: t("items.nextjs.name"),
      icon: SiNextdotjs,
      description: t("items.nextjs.description"),
      code: t("items.nextjs.code"),
    },
    {
      name: t("items.tailwind.name"),
      icon: SiTailwindcss,
      description: t("items.tailwind.description"),
      code: t("items.tailwind.code"),
    },
    {
      name: t("items.framer.name"),
      icon: SiFramer,
      description: t("items.framer.description"),
      code: t("items.framer.code"),
    },
  ];

  const defaultInfo = {
    name: t("default.name"),
    icon: null,
    description: t("default.description"),
    code: t("default.code"),
  };

  const [active, setActive] = useState(defaultInfo);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="relative mt-0 border-t border-foreground/6">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="mb-12 text-xs tracking-widest uppercase text-foreground/40">
          ساخته شده با
        </p>

        {/* tab strip */}
        <div className="flex gap-px rounded-xl border border-foreground/[0.07] bg-foreground/3 overflow-hidden mb-6">
          {stack.map((item) => {
            const Icon = item.icon;
            const isActive = active.name === item.name;
            return (
              <button
                key={item.name}
                onMouseEnter={() => setActive(item)}
                onClick={() => setActive(item)}
                className={`
                  group relative flex-1 flex flex-col items-center gap-2.5 py-5 px-3
                  transition-colors duration-150 cursor-pointer
                  ${
                    isActive
                      ? "bg-background text-foreground"
                      : "text-foreground/35 hover:text-foreground/60 hover:bg-background/50"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="techActive"
                    className="absolute top-0 left-0 right-0 h-px bg-primary"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <Icon className="text-xl shrink-0" />
                <span className="hidden sm:block text-xs font-medium tracking-wide">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* detail panel */}
        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.18 }}
          className="grid md:grid-cols-[1fr_1.6fr] gap-8 items-start"
        >
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground mb-3">
              {active.name}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/55">
              {active.description}
            </p>
          </div>

          <div
            dir="ltr"
            className="relative rounded-lg border border-foreground/8 bg-foreground/3 overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-foreground/6">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
                <span className="w-2.5 h-2.5 rounded-full bg-foreground/10" />
              </div>
              <button
                onClick={handleCopy}
                className="font-mono text-[10px] tracking-wider uppercase text-foreground/40 hover:text-primary transition-colors cursor-pointer"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
            <pre className="p-4 text-xs font-mono text-foreground/60 leading-relaxed overflow-x-auto whitespace-pre-wrap">
              <code>{active.code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FEATURES ──────────────────────────────────────────────────────────────────

function FeaturesSection() {
  const t = useTranslations("features");
  const shouldReduceMotion = useReducedMotion();

  const features = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      image: "/image.png",
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      image: "/image.png",
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      image: "/image.png",
    },
  ];

  return (
    <section className="relative border-t border-foreground/[0.06]">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-widest uppercase text-foreground/40">
          {t("title")}
        </p>
        <h2 className="mb-20 text-3xl md:text-4xl font-bold tracking-tight text-foreground max-w-lg">
          {t("description")}
        </h2>

        <div className="space-y-24">
          {features.map((feature, index) => {
            const reversed = index % 2 === 1;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div>
                  <p className="mb-4 font-mono text-[10px] tracking-widest uppercase text-primary/70">
                    {t("feature")} {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight leading-snug text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/55 max-w-sm">
                    {feature.description}
                  </p>
                </div>

                <div className="relative overflow-hidden rounded-xl border border-foreground/[0.08]">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── NAV CARDS (what this site has) ───────────────────────────────────────────

const SITE_SECTIONS = [
  {
    href: "/components",
    label: "کامپوننت",
    tag: "80+",
    description:
      "کامپوننت‌های دسترس‌پذیر که می‌توانید متناسب با پروژه خود شخصی‌سازی کنید.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    href: "/blocks",
    label: "بلاک‌ها",
    tag: "New",
    description:
      "بخش‌های آماده برای استفاده در صفحات مختلف؛ از هدر و معرفی گرفته تا امکانات، قیمت‌گذاری و موارد دیگر.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <rect x="3" y="3" width="18" height="5" rx="1.5" />
        <rect x="3" y="11" width="10" height="10" rx="1.5" />
        <rect x="16" y="11" width="5" height="10" rx="1.5" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "درباره پروژه",
    tag: null,
    description:
      "داستان شکل‌گیری پروژه، ابزارهای استفاده‌شده و نمونه‌هایی از پروژه‌هایی که با آن ساخته شده‌اند.",
    icon: (
      <svg
        className="w-5 h-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <circle cx="12" cy="8" r="3.5" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─── HOME / HERO ───────────────────────────────────────────────────────────────

export default function Home() {
  const t = useTranslations("home-page");
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <div className="relative overflow-hidden">
        {/* dot grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(145,135,222,0.10) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            maskImage:
              "radial-gradient(ellipse 75% 55% at 50% 20%, black 25%, transparent 100%)",
          }}
        />

        {/* accent glow — just one, top-center, restrained */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[480px] h-[380px] rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(78,60,217,0.22) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />

        {/* scan-line — once on load */}
        {!shouldReduceMotion && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(145,135,222,0.5), transparent)",
            }}
            initial={{ top: "0%", opacity: 0 }}
            animate={{ top: ["0%", "65%"], opacity: [0, 1, 0] }}
            transition={{ duration: 1.8, ease: "easeInOut", delay: 0.4 }}
          />
        )}

        {/* ── content ── */}
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pt-36 pb-28 text-center">
          {/* status pill */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-10 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.07] px-4 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] tracking-widest uppercase text-foreground/50">
              v0.1.0-beta · Work in progress
            </span>
          </motion.div>

          {/* headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: 0.2 }}
            className="mb-5 text-[clamp(36px,6vw,72px)] font-black leading-[1.05] tracking-[-0.04em] text-foreground"
          >
            کامپوننت‌هایی برای ساخت{" "}
            <span className="text-primary">سریع‌تر</span>
          </motion.h1>

          {/* description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.45,
              delay: 0.32,
            }}
            className="mb-12 max-w-sm text-base leading-relaxed text-foreground/50"
          >
            مجموعه‌ای از کامپوننت‌های انیمیت‌شده، دسترس‌پذیر و آماده استفاده.
            برای ساخت رابط‌های کاربری مدرن و حرفه‌ای.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: 0.44 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/components"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-80"
            >
              {t("button")}
              <span className="transition-transform duration-150 group-hover:translate-x-0.5 text-xs">
                →
              </span>
            </Link>

            <a
              href="https://github.com"
              className="inline-flex items-center gap-2 rounded-lg border border-foreground/12 px-6 py-2.5 text-sm font-medium text-foreground/55 transition-colors duration-150 hover:border-foreground/25 hover:text-foreground"
            >
              View on GitHub
            </a>
          </motion.div>
        </div>

        {/* ── section nav cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: 0.6 }}
          className="relative z-10 max-w-5xl mx-auto px-6 pb-20"
        >
          <div className="grid sm:grid-cols-3 gap-3">
            {SITE_SECTIONS.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group relative flex flex-col gap-4 rounded-xl border border-foreground/8 bg-foreground/3 p-5 transition-colors duration-200 hover:border-primary/30 hover:bg-primary/[0.04]"
              >
                {/* top-edge accent on hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-xl bg-linear-to-r from-transparent via-primary/0 to-transparent transition-all duration-300 group-hover:via-primary/40" />

                <div className="flex items-start justify-between">
                  <span className="text-foreground/40 group-hover:text-primary transition-colors duration-200">
                    {section.icon}
                  </span>
                  {section.tag && (
                    <span className="font-mono text-[10px] tracking-widest uppercase text-primary/80 border border-primary/20 bg-primary/8 rounded-md px-2 py-0.5">
                      {section.tag}
                    </span>
                  )}
                </div>

                <div>
                  <p className="text-sm font-semibold text-foreground mb-1 group-hover:text-foreground transition-colors">
                    {section.label}
                  </p>
                  <p className="text-xs leading-relaxed text-foreground/45">
                    {section.description}
                  </p>
                </div>

                <span className="mt-auto text-xs text-foreground/30 group-hover:text-primary transition-colors duration-200 flex items-center gap-1">
                  مشاهده
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-foreground/6" />
      </div>

      <TechStack />
      <FeaturesSection />
    </>
  );
}
