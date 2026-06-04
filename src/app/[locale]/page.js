"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import TechStack from "./TechStack";
import FeaturesSection from "./Features";

export default function Home() {
  const t = useTranslations("home-page");
  return (
    <div className="mx-auto max-w-7xl px-6 py-32 text-center">
      <section>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6"
        >
          {t("title")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 mb-10"
        >
          {t("description")}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur border border-white/10"
        >
          <a href="/components">مشاهده کامپوننت‌ها</a>
        </motion.button>
      </section>
      <TechStack />
      <FeaturesSection />
    </div>
  );
}
