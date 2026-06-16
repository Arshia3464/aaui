"use client";

import Link from "next/link";

import { motion } from "framer-motion";

import { FaArrowLeft, FaBookOpen, FaCode, FaRocket } from "react-icons/fa";

const sections = [
  {
    title: "شروع کار",
    description:
      "نصب کتابخانه و شروع استفاده از کامپوننت‌ها داخل پروژه‌های React و Next.js.",
    icon: FaRocket,
    href: "/fa/docs/getting-started",
  },

  {
    title: "انیمیشن‌ها",
    description:
      "یاد بگیرید چطور انیمیشن‌ها با Framer Motion ساخته و مدیریت می‌شوند.",
    icon: FaCode,
    href: "/fa/docs/framer-motion",
  },

  {
    title: "کامپوننت‌ها",
    description:
      "تمامی کامپوننت‌های آماده را مشاهده کرده و مستقیماً داخل پروژه خود استفاده کنید.",
    icon: FaBookOpen,
    href: "/fa/components",
  },
];

export default function DocsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background blobs */}
      <div className="absolute top-0 right-0 h-125 w-125 rounded-full bg-accent/20 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-125 w-125 rounded-full bg-secondary/10 blur-3xl" />

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* hero */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mb-24 max-w-3xl"
        >
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full border border-foreground/10
              bg-foreground/5 px-4 py-1.5
              text-sm text-foreground/80 backdrop-blur-md
            "
          >
            <div className="h-2 w-2 rounded-full bg-accent" />
            مستندات AAUI
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
            مستندات کامل برای ساخت رابط‌های مدرن
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-foreground/60">
            نحوه استفاده از کامپوننت‌ها، انیمیشن‌ها، ساختار پروژه و الگوهای
            طراحی مدرن را یاد بگیرید و سریع‌تر رابط‌های حرفه‌ای بسازید.
          </p>
        </motion.div>

        {/* cards */}
        <div className="mb-28 grid gap-6 md:grid-cols-3">
          {sections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.08,
                }}
              >
                <Link
                  href={section.href}
                  className="
                    group relative block h-full overflow-hidden
                    rounded-3xl border border-foreground/10
                    bg-secondary/30 p-7
                    backdrop-blur-xl
                  "
                >
                  {/* glow */}
                  <div
                    className="
                      absolute inset-0 opacity-0
                      transition-opacity duration-500
                      group-hover:opacity-100
                      bg-linear-to-br
                      from-accent/10
                      via-primary/5
                      to-transparent
                    "
                  />

                  <div className="relative z-10">
                    <div
                      className="
                        mb-6 flex h-14 w-14 items-center
                        justify-center rounded-2xl
                        border border-foreground/10
                        bg-foreground/5
                      "
                    >
                      <Icon className="text-xl" />
                    </div>

                    <h3 className="mb-4 text-2xl font-semibold">
                      {section.title}
                    </h3>

                    <p className="mb-8 leading-7 text-foreground/60">
                      {section.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-foreground/80">
                      مشاهده
                      <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* example docs content */}
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* sidebar */}
          <aside className="sticky top-24 h-fit">
            <div
              className="
                rounded-3xl border border-foreground/10
                bg-secondary/30
                p-6
                backdrop-blur-xl
              "
            >
              <h3 className="mb-5 text-lg font-semibold">دسترسی سریع</h3>

              <div className="space-y-2">
                {[
                  "معرفی",
                  "نصب",
                  "نحوه استفاده",
                  "انیمیشن‌ها",
                  "شخصی‌سازی",
                  "دارک مود",
                ].map((item) => (
                  <button
                    key={item}
                    className="
                      w-full rounded-xl px-4 py-3
                      text-right text-foreground/60
                      transition-colors
                      hover:bg-foreground/5
                      hover:text-foreground
                    "
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
            <section
              className="
                rounded-3xl border border-foreground/10
                bg-secondary/30
                p-8
                backdrop-blur-xl
              "
            >
              <h2 className="mb-5 text-3xl font-bold">معرفی</h2>

              <p className="leading-8 text-foreground/60">
                این کتابخانه مجموعه‌ای از کامپوننت‌ها، بلاک‌ها و الگوهای طراحی
                مدرن برای React و Next.js ارائه می‌دهد. تمامی بخش‌ها با تمرکز
                روی تجربه توسعه‌دهنده، مقیاس‌پذیری و طراحی حرفه‌ای ساخته
                شده‌اند.
              </p>
            </section>

            {/* install */}
            <section
              className="
                rounded-3xl border border-foreground/10
                bg-secondary/30
                p-8
                backdrop-blur-xl
              "
            >
              <h2 className="mb-6 text-3xl font-bold">نصب وابستگی‌ها</h2>

              <p className="mb-6 leading-8 text-foreground/60">
                قبل از استفاده از کامپوننت‌ها، پکیج‌های موردنیاز را نصب کنید.
              </p>

              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-foreground/10
                  bg-background/40
                "
              >
                <div
                  className="
                    flex items-center justify-between
                    border-b border-foreground/10
                    px-5 py-3
                  "
                >
                  <span className="text-sm text-foreground/60">Terminal</span>

                  <button
                    className="
                      rounded-lg bg-foreground/10
                      px-3 py-1 text-xs
                      transition-colors
                      hover:bg-foreground/20
                    "
                  >
                    Copy
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 text-sm text-foreground/80">
                  {`npm install framer-motion tailwindcss react-icons`}
                </pre>
              </div>
            </section>

            {/* framer motion */}
            <section
              className="
                relative overflow-hidden rounded-3xl
                border border-accent/20
                bg-gradient-to-b
                from-accent/10
                to-transparent
                p-8
              "
            >
              {/* glow */}
              <div
                className="
                  absolute top-0 left-1/2
                  h-60 w-60 -translate-x-1/2
                  rounded-full bg-accent/10 blur-3xl
                "
              />

              <div className="relative z-10">
                <div
                  className="
                    mb-5 inline-flex items-center gap-2
                    rounded-full border border-accent/20
                    bg-accent/10
                    px-4 py-1.5
                    text-sm text-accent
                  "
                >
                  ✦ محبوب‌ترین کتابخانه انیمیشن React
                </div>

                <h2 className="mb-5 text-3xl font-bold">آموزش Framer Motion</h2>

                <p className="mb-8 max-w-3xl leading-8 text-foreground/70">
                  Framer Motion یکی از قدرتمندترین کتابخانه‌های انیمیشن برای
                  React است که به شما اجازه می‌دهد انیمیشن‌های نرم، حرفه‌ای و
                  مدرن بسازید. بسیاری از کامپوننت‌های AAUI از این کتابخانه برای
                  hover animation، page transition و micro interaction ها
                  استفاده می‌کنند.
                </p>

                <div className="grid gap-5 md:grid-cols-2">
                  <div
                    className="
                      rounded-2xl border border-foreground/10
                      bg-background/40 p-5
                    "
                  >
                    <h3 className="mb-3 text-xl font-semibold">
                      چه چیزهایی یاد می‌گیرید؟
                    </h3>

                    <div className="space-y-3 text-foreground/60">
                      <p>• ساخت انیمیشن‌های ورود</p>

                      <p>• Hover و Tap animation</p>

                      <p>• Scroll animation</p>

                      <p>• Layout transition</p>

                      <p>• ساخت interaction های مدرن</p>
                    </div>
                  </div>

                  <div
                    className="
                      rounded-2xl border border-foreground/10
                      bg-background/40 p-5
                    "
                  >
                    <h3 className="mb-3 text-xl font-semibold">نصب سریع</h3>

                    <div
                      className="
                        overflow-hidden rounded-xl
                        border border-foreground/10
                        bg-background/60
                      "
                    >
                      <div className="border-b border-foreground/10 px-4 py-2 text-sm text-foreground/60">
                        npm
                      </div>

                      <pre className="overflow-x-auto p-4 text-sm text-foreground/80">
                        {`npm install framer-motion`}
                      </pre>
                    </div>

                    <Link
                      href="/fa/docs/framer-motion"
                      className="
                        mt-5 inline-flex items-center gap-2
                        rounded-xl bg-foreground px-5 py-3
                        font-medium text-background
                        transition-transform hover:scale-[1.02]
                      "
                    >
                      مشاهده آموزش کامل
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* animation example */}
            <section
              className="
                rounded-3xl border border-foreground/10
                bg-secondary/30
                p-8
                backdrop-blur-xl
              "
            >
              <h2 className="mb-6 text-3xl font-bold">مثال ساده انیمیشن</h2>

              <p className="mb-6 leading-8 text-foreground/60">
                کامپوننت‌ها از Framer Motion برای ساخت انیمیشن‌های نرم و مدرن
                استفاده می‌کنند.
              </p>

              <div
                className="
                  relative overflow-hidden rounded-2xl
                  border border-foreground/10
                  bg-background/40
                "
              >
                <div
                  className="
                    flex items-center justify-between
                    border-b border-foreground/10
                    px-5 py-3
                  "
                >
                  <span className="text-sm text-foreground/60">
                    Example.tsx
                  </span>

                  <button
                    className="
                      rounded-lg bg-foreground/10
                      px-3 py-1 text-xs
                      transition-colors
                      hover:bg-foreground/20
                    "
                  >
                    Copy
                  </button>
                </div>

                <pre className="overflow-x-auto p-5 text-sm text-foreground/80">
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
            <section
              className="
                rounded-3xl border border-foreground/10
                bg-secondary/30
                p-8
                backdrop-blur-xl
              "
            >
              <h2 className="mb-5 text-3xl font-bold">پیدا کردن کامپوننت‌ها</h2>

              <p className="leading-8 text-foreground/60">
                کامپوننت‌ها بر اساس کاربرد دسته‌بندی شده‌اند؛ مانند فرم‌ها،
                navigation، overlay و layout ها. هر صفحه شامل پیش‌نمایش زنده،
                سورس کد و قابلیت شخصی‌سازی است تا بتوانید سریع‌تر آن‌ها را داخل
                پروژه‌های خود استفاده کنید.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
