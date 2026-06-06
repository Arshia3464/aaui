"use client";

import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

import { Link } from "@/components/navigation";

import TechStack from "./TechStack";
import FeaturesSection from "./Features";

export default function Home() {
  const t = useTranslations("home-page");

  return (
    <div className="relative overflow-hidden">
      {/* subtle page background gradient */}

      <div
        className="

      pointer-events-none absolute inset-x-0 top-0

      h-[600px]

      bg-gradient-to-b

      from-violet-500/6

      via-fuchsia-500/[0.03]

      to-transparent

    "
      />

      {/* softer glow */}

      <div
        className="

      pointer-events-none absolute left-1/2 top-0

      h-[420px] w-[420px]

      -translate-x-1/2

      rounded-full

      bg-violet-400/5

      blur-3xl

    "
      />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32 text-center">
        <section>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            className="mb-6 text-5xl font-bold"
          >
            {t("title")}
          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="mb-10 text-zinc-400"
          >
            {t("description")}
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.4,
            }}
          >
            <Link
              href="/components"
              className="
                inline-flex items-center justify-center
                rounded-xl border border-white/10
                bg-white/10 px-6 py-3
                backdrop-blur transition
                hover:bg-white/20
              "
            >
              {t("button")}
            </Link>
          </motion.div>
        </section>

        <TechStack />

        <FeaturesSection />
      </div>
    </div>
  );
}
