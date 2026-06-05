"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FaArrowRight, FaBookOpen, FaCode, FaRocket } from "react-icons/fa";

const sections = [
  {
    title: "Getting Started",
    description:
      "Install the library and start using components inside your Next.js project.",
    icon: FaRocket,
    href: "/docs/getting-started",
  },

  {
    title: "Animations",
    description:
      "Learn how animations are structured using Framer Motion and reusable presets.",
    icon: FaCode,
    href: "/docs/animations",
  },

  {
    title: "Components",
    description:
      "Browse all available UI components and copy them directly into your app.",
    icon: FaBookOpen,
    href: "/components",
  },
];

export default function DocsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background blobs */}
      <div className="absolute top-0 left-0 w-125 h-125 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="absolute bottom-0 right-0 w-125 h-125 bg-cyan-500/10 blur-3xl rounded-full" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        {/* hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-sm text-zinc-300">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            Documentation
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build modern interfaces faster.
          </h1>

          <p className="text-zinc-400 text-lg leading-8 max-w-2xl">
            Browse reusable components, copy production-ready code and learn how
            animations, layouts and design patterns are structured throughout
            the library.
          </p>
        </motion.div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-28">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={section.href}
                  className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-7 h-full"
                >
                  {/* glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-purple-500/10 via-cyan-500/5 to-transparent" />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-4">
                      {section.title}
                    </h3>

                    <p className="text-zinc-400 leading-7 mb-8">
                      {section.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                      Explore
                      <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* example docs content */}
        <div className="grid lg:grid-cols-[260px_1fr] gap-10">
          {/* sidebar */}
          <aside className="h-fit sticky top-24">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6">
              <h3 className="font-semibold mb-5 text-lg">Quick Navigation</h3>

              <div className="space-y-2">
                {[
                  "Introduction",
                  "Installation",
                  "Usage",
                  "Animations",
                  "Customization",
                  "Dark Mode",
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* content */}
          <div className="space-y-12">
            {/* intro */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <h2 className="text-3xl font-bold mb-5">Introduction</h2>

              <p className="text-zinc-400 leading-8">
                This library provides reusable UI components, layouts and blocks
                designed for modern React and Next.js applications. Everything
                is focused on smooth developer experience, scalability and
                production-ready design patterns.
              </p>
            </section>

            {/* install */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Installation</h2>

              <p className="text-zinc-400 leading-8 mb-6">
                Install the required dependencies before using components.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <span className="text-sm text-zinc-500">Terminal</span>

                  <button className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    Copy
                  </button>
                </div>

                <pre className="p-5 overflow-x-auto text-sm text-zinc-300">
                  {`npm install framer-motion tailwindcss react-icons`}
                </pre>
              </div>
            </section>

            {/* animation example */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <h2 className="text-3xl font-bold mb-6">Simple Animation</h2>

              <p className="text-zinc-400 leading-8 mb-6">
                Components use Framer Motion for smooth interactions and modern
                transitions.
              </p>

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10">
                  <span className="text-sm text-zinc-500">Example.tsx</span>

                  <button className="text-xs px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
                    Copy
                  </button>
                </div>

                <pre className="p-5 overflow-x-auto text-sm text-zinc-300">
                  {`<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
>
  Content
</motion.div>`}
                </pre>
              </div>
            </section>

            {/* usage */}
            <section className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8">
              <h2 className="text-3xl font-bold mb-5">Finding Components</h2>

              <p className="text-zinc-400 leading-8">
                Components are categorized by purpose such as forms, navigation,
                overlays and layouts. Each page includes a live preview, source
                code and customization options so you can quickly integrate them
                into your own projects.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
