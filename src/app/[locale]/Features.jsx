"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function FeaturesSection() {
  const t = useTranslations("features");

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
    <section className="relative z-10 mt-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* section heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">{t("title")}</h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-8 text-lg">
            {t("description")}
          </p>
        </div>

        {/* feature rows */}
        <div className="space-y-36">
          {features.map((feature, index) => {
            const reversed = index % 2 === 1;

            return (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* text side */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm text-zinc-300">
                    {t("feature")} {index + 1}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    {feature.title}
                  </h3>

                  <p className="text-zinc-400 leading-8 text-lg max-w-xl">
                    {feature.description}
                  </p>
                </motion.div>

                {/* image side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{
                    y: -6,
                  }}
                  className="group relative"
                >
                  {/* ambient glow */}
                  <div className="absolute -inset-10 rounded-[40px] bg-linear-to-r from-purple-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl opacity-70" />

                  {/* secondary soft glow */}
                  <div className="absolute inset-0 rounded-3xl bg-white/3" />

                  {/* image container */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
                    {/* image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-95 object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* dark gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/10 to-transparent" />

                    {/* subtle top shine */}
                    <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-60" />
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
