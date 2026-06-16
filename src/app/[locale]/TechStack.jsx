"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTranslations } from "next-intl";

import { FaJs, FaReact } from "react-icons/fa";

import { SiFramer, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function TechStack() {
  const t = useTranslations("tech-stack");

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

      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="relative z-10 mt-40">
      <div className="max-w-6xl mx-auto sm:px-6 p-1">
        {/* info panel */}
        <div className="mb-10 min-h-65 rounded-3xl border border-[color:var(--foreground)]/10 bg-[color:var(--background)]/5 backdrop-blur-xl p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-5">
                {active.icon && (
                  <active.icon className="text-4xl text-[var(--foreground)] shrink-0" />
                )}

                <h3 className="sm:text-3xl text-lg font-bold text-[var(--foreground)]">
                  {active.name}
                </h3>
              </div>

              <p className="text-[color:var(--foreground)]/70 text-start sm:text-md mb-6">
                {active.description}
              </p>

              <div className="relative sm:block hidden rounded-xl bg-[color:var(--background)]/40 border border-[color:var(--foreground)]/10 p-4 overflow-x-auto">
                <button
                  onClick={handleCopy}
                  className="absolute top-3 right-3 text-xs px-3 py-1 rounded-lg bg-[color:var(--background)]/10 hover:bg-[color:var(--background)]/20 border border-[color:var(--foreground)]/10 transition-colors"
                >
                  {copied ? t("copied") : t("copy")}
                </button>

                <code className="text-sm text-[color:var(--foreground)]/70 whitespace-pre-wrap pr-20 block">
                  {active.code}
                </code>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {stack.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                onMouseEnter={() => setActive(item)}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();

                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;

                  e.currentTarget.style.setProperty("--x", `${x}px`);
                  e.currentTarget.style.setProperty("--y", `${y}px`);
                }}
                className="group relative overflow-hidden rounded-2xl border border-[color:var(--foreground)]/10 bg-[color:var(--background)]/5 backdrop-blur-xl p-6 h-42.5 transition-colors"
              >
                {/* cursor glow */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `
                      radial-gradient(
                        250px circle at var(--x) var(--y),
                        rgba(255,255,255,0.15),
                        transparent 70%
                      )
                    `,
                  }}
                />

                {/* border glow */}
                <div className="absolute inset-0 rounded-2xl border border-[color:var(--foreground)]/5 group-hover:border-[color:var(--foreground)]/15 transition-colors" />

                {/* content */}
                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <Icon className="text-5xl mb-4 text-[var(--foreground)]" />

                  <h3 className="font-medium text-lg text-[var(--foreground)]">
                    {item.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
