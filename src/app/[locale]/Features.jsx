"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Browse Ready Components",
    description:
      "Explore a growing collection of reusable UI components and modern interface patterns built for real-world applications.",
    image: "/image.png",
  },

  {
    title: "Customize Everything",
    description:
      "Easily modify layouts, animations, spacing and themes to perfectly match your project and design system.",
    image: "/image.png",
  },

  {
    title: "Built For Production",
    description:
      "Responsive, scalable and optimized components designed with clean architecture and modern frontend practices.",
    image: "/image.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative z-10 mt-40">
      <div className="max-w-6xl mx-auto px-6">
        {/* section heading */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Designed For Modern Development
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto leading-8 text-lg">
            Everything is built to help you create beautiful interfaces faster
            without sacrificing flexibility or quality.
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
                    Feature {index + 1}
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
                  <div className="absolute -inset-10 rounded-[40px] bg-gradient-to-r from-purple-500/20 via-cyan-500/10 to-blue-500/20 blur-3xl opacity-70" />

                  {/* secondary soft glow */}
                  <div className="absolute inset-0 rounded-3xl bg-white/[0.03]" />

                  {/* image container */}
                  <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/60 backdrop-blur-xl shadow-2xl">
                    {/* image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                    {/* subtle top shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />
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
