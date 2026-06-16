import Link from "next/link";

export const metadata = {
  title: "مستندات Framer Motion | آموزش کامل انیمیشن در React و Next.js - AAUI",

  description:
    "آموزش کامل Framer Motion برای React و Next.js همراه با نصب، انیمیشن‌های پایه، gesture ها، transition ها، layout animation و مثال‌های کاربردی.",

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="mx-auto max-w-5xl space-y-16 mt-20">
      {/* hero */}
      <section className="relative overflow-hidden rounded-4xl border border-foreground/10 bg-background/40 p-8 md:p-12">
        {/* glow */}
        <div className="absolute top-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10">
          <div
            className="
              mb-6 inline-flex items-center gap-2
              rounded-full border border-foreground/10
              bg-foreground/5
              px-4 py-2
              text-sm text-foreground/80
              backdrop-blur-xl
            "
          >
            ✦ مستندات رسمی AAUI
          </div>

          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            آموزش کامل
            <span className="bg-gradient-to-r from-primary/70 to-secondary/70 bg-clip-text text-transparent">
              Framer Motion
            </span>
          </h1>

          <p className="max-w-3xl text-lg leading-9 text-foreground/70">
            Framer Motion یکی از محبوب‌ترین کتابخانه‌های انیمیشن برای React است
            که به شما اجازه می‌دهد به‌سادگی انیمیشن‌های نرم، حرفه‌ای و مدرن
            بسازید. این کتابخانه به‌شدت در پروژه‌های React و Next.js استفاده
            می‌شود و تقریباً در اکثر رابط‌های کاربری مدرن حضور دارد.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#install"
              className="
                rounded-2xl bg-foreground px-6 py-3
                font-medium text-background transition-transform
                hover:scale-[1.02]
              "
            >
              شروع آموزش
            </Link>

            <Link
              href="#examples"
              className="
                rounded-2xl border border-foreground/10
                bg-foreground/5 px-6 py-3
                text-foreground backdrop-blur-xl
                transition-colors hover:bg-foreground/10
              "
            >
              مشاهده مثال‌ها
            </Link>
          </div>
        </div>
      </section>

      {/* what is framer motion */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-5 text-3xl font-bold">Framer Motion چیست؟</h2>

          <p className="leading-9 text-foreground/70">
            Framer Motion یک کتابخانه قدرتمند برای ساخت انیمیشن در React است.
            این کتابخانه توسط تیم Framer ساخته شده و هدف آن ساده‌کردن ساخت
            انیمیشن‌های پیچیده در رابط کاربری است.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <div className="mb-4 text-3xl">⚡</div>

            <h3 className="mb-3 text-xl font-semibold">بسیار ساده</h3>

            <p className="leading-8 text-foreground/70">
              تنها با چند prop ساده می‌توانید انیمیشن‌های حرفه‌ای ایجاد کنید
              بدون اینکه وارد پیچیدگی‌های CSS animation شوید.
            </p>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <div className="mb-4 text-3xl">🎨</div>

            <h3 className="mb-3 text-xl font-semibold">مناسب UI مدرن</h3>

            <p className="leading-8 text-foreground/70">
              تقریباً تمامی رابط‌های کاربری مدرن از micro interaction ها، hover
              animation ها و transition های نرم استفاده می‌کنند.
            </p>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <div className="mb-4 text-3xl">🧩</div>

            <h3 className="mb-3 text-xl font-semibold">هماهنگ با React</h3>

            <p className="leading-8 text-foreground/70">
              کاملاً بر پایه React طراحی شده و به‌خوبی با state ها، conditional
              rendering و component ها کار می‌کند.
            </p>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <div className="mb-4 text-3xl">🚀</div>

            <h3 className="mb-3 text-xl font-semibold">مناسب Next.js</h3>

            <p className="leading-8 text-foreground/70">
              یکی از رایج‌ترین انتخاب‌ها برای پروژه‌های Next.js و App Router
              است.
            </p>
          </div>
        </div>
      </section>

      {/* install */}
      <section
        id="install"
        className="rounded-4xl border border-foreground/10 bg-background/30 p-8"
      >
        <h2 className="mb-8 text-3xl font-bold">نصب Framer Motion</h2>

        <p className="mb-8 leading-9 text-foreground/70">
          برای نصب کافی است یکی از دستورات زیر را داخل ترمینال پروژه اجرا کنید.
        </p>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/40">
            <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
              npm
            </div>

            <pre className="overflow-x-auto p-5 text-left text-sm text-foreground">
              <code>npm install framer-motion</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/40">
            <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
              yarn
            </div>

            <pre className="overflow-x-auto p-5 text-left text-sm text-foreground">
              <code>yarn add framer-motion</code>
            </pre>
          </div>

          <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-background/40">
            <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
              pnpm
            </div>

            <pre className="overflow-x-auto p-5 text-left text-sm text-foreground">
              <code>pnpm add framer-motion</code>
            </pre>
          </div>
        </div>
      </section>

      {/* first animation */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-5 text-3xl font-bold">اولین انیمیشن</h2>

          <p className="leading-9 text-foreground/70">
            برای استفاده از Framer Motion ابتدا باید motion را import کنید. سپس
            می‌توانید هر element معمولی را به motion component تبدیل کنید.
          </p>
        </div>

        <div
          dir="ltr"
          className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/40"
        >
          <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
            Example.jsx
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-8 text-foreground">
            {`"use client";

import { motion } from "framer-motion";

export default function Example() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      Hello World
    </motion.div>
  );
}`}
          </pre>
        </div>

        <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6">
          <h3 className="mb-4 text-xl font-semibold">توضیح props ها</h3>

          <div className="space-y-4 text-foreground/80">
            <p>• initial → وضعیت اولیه قبل از شروع انیمیشن</p>

            <p>• animate → وضعیت نهایی انیمیشن</p>

            <p>• transition → کنترل سرعت، delay و نوع حرکت</p>
          </div>
        </div>
      </section>

      {/* hover animations */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-5 text-3xl font-bold">Hover Animation</h2>

          <p className="leading-9 text-foreground/70">
            یکی از رایج‌ترین استفاده‌های Framer Motion ساخت hover animation ها
            برای دکمه‌ها و کارت‌ها است.
          </p>
        </div>

        <div
          dir="ltr"
          className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/40"
        >
          <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
            Hover Button
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-8 text-foreground">
            {`<motion.button
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
>
  Button
</motion.button>`}
          </pre>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <h3 className="mb-3 text-xl font-semibold">whileHover</h3>

            <p className="leading-8 text-foreground/70">
              زمانی اجرا می‌شود که کاربر روی element hover کند.
            </p>
          </div>

          <div className="rounded-3xl border border-foreground/10 bg-background/30 p-6">
            <h3 className="mb-3 text-xl font-semibold">whileTap</h3>

            <p className="leading-8 text-foreground/70">
              زمانی اجرا می‌شود که کاربر روی element کلیک یا tap کند.
            </p>
          </div>
        </div>
      </section>

      {/* scroll animation */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-5 text-3xl font-bold">انیمیشن هنگام اسکرول</h2>

          <p className="leading-9 text-foreground/70">
            یکی از محبوب‌ترین قابلیت‌های Framer Motion انیمیشن هنگام ورود
            component به viewport است.
          </p>
        </div>

        <div
          dir="ltr"
          className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/40"
        >
          <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
            Scroll Animation
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-8 text-foreground">
            {`<motion.div
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
>
  Content
</motion.div>`}
          </pre>
        </div>
      </section>

      {/* transitions */}
      <section className="space-y-8">
        <div>
          <h2 className="mb-5 text-3xl font-bold">Transition ها</h2>

          <p className="leading-9 text-foreground/70">
            Transition مشخص می‌کند انیمیشن چگونه حرکت کند.
          </p>
        </div>

        <div
          dir="ltr"
          className="overflow-hidden rounded-3xl border border-foreground/10 bg-background/40"
        >
          <div className="border-b border-foreground/10 px-5 py-3 text-sm text-foreground/60">
            Transition Example
          </div>

          <pre className="overflow-x-auto p-6 text-sm leading-8 text-foreground">
            {`transition={{
  duration: 0.5,
  delay: 0.2,
  ease: "easeOut",
}}`}
          </pre>
        </div>

        <div className="space-y-4 text-foreground/80">
          <p>• duration → مدت زمان انیمیشن</p>

          <p>• delay → تاخیر قبل از شروع</p>

          <p>• ease → نوع حرکت انیمیشن</p>
        </div>
      </section>

      {/* important note */}
      <section className="rounded-4xl border border-secondary/20 bg-secondary/5 p-8">
        <h2 className="mb-5 text-3xl font-bold">نکته مهم در Next.js</h2>

        <p className="leading-9 text-foreground/80">
          Framer Motion فقط در Client Component ها کار می‌کند. بنابراین در
          فایل‌هایی که از motion استفاده می‌کنند باید در ابتدای فایل از "use
          client" استفاده کنید.
        </p>

        <div
          dir="ltr"
          className="mt-8 overflow-hidden rounded-2xl border border-foreground/10 bg-background/40"
        >
          <pre className="overflow-x-auto p-6 text-sm text-foreground">
            {`"use client";

import { motion } from "framer-motion";`}
          </pre>
        </div>
      </section>

      {/* final */}
      <section className="rounded-4xl border border-foreground/10 bg-background/30 p-10 text-center">
        <div className="mb-4 text-5xl">♡</div>

        <h2 className="mb-5 text-3xl font-bold">شروع به ساخت انیمیشن کنید</h2>

        <p className="mx-auto max-w-2xl leading-9 text-foreground/70">
          حالا که با مفاهیم پایه Framer Motion آشنا شدید می‌توانید از آن برای
          ساخت رابط‌های کاربری مدرن، انیمیشن‌های نرم و تجربه کاربری حرفه‌ای
          استفاده کنید.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/fa/components"
            className="
              rounded-2xl bg-foreground px-6 py-3
              font-medium text-background
              transition-transform hover:scale-[1.02]
            "
          >
            مشاهده کامپوننت‌ها
          </Link>
        </div>
      </section>
    </div>
  );
}
