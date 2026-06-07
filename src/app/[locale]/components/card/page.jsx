import ComponentPreview from "@/components/Preview";

import GlassCard from "@/components/cards/GlassCard";

import FadeUp from "@/components/FadeUp";

import fs from "fs";
import path from "path";
import FlipCard from "@/components/cards/FlipCard";

const cardsDir = path.join(process.cwd(), "src/components/cards");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(cardsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

const glassCardCode = getCode("GlassCard");
const flipCardCode = getCode("FlipCard");

export default function Page() {
  return (
    <div className="space-y-16">
      {/* header */}
      <FadeUp delay={0}>
        <div className="max-w-4xl">
          <div
            className="
              mb-5 inline-flex items-center gap-2
              rounded-full border border-white/10
              bg-white/[0.03]
              px-4 py-2 text-sm text-zinc-300
              backdrop-blur-xl
            "
          >
            <div className="h-2 w-2 rounded-full bg-purple-400" />
            Cards Collection
          </div>

          <h1 className="mb-6 text-4xl font-black md:text-5xl">
            کارت‌های مدرن و قابل استفاده مجدد
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-zinc-400">
            مجموعه‌ای از کارت‌های مدرن ساخته شده با React و Tailwind CSS که
            می‌توانید آن‌ها را مستقیماً داخل پروژه‌های خود استفاده و شخصی‌سازی
            کنید.
          </p>
        </div>
      </FadeUp>

      {/* usage */}
      <FadeUp delay={0.1}>
        <div
          className="
            overflow-hidden rounded-[32px]
            border border-white/10
            bg-zinc-900/30
            backdrop-blur-2xl
          "
        >
          {/* top glow */}
          <div className="h-1 w-full bg-linear-to-r from-purple-500/50 via-cyan-500/50 to-transparent" />

          <div className="p-6 md:p-8">
            <h2 className="mb-6 text-2xl font-bold">نحوه استفاده</h2>

            <div className="space-y-5 leading-8 text-zinc-400">
              <p>
                • تمامی کارت‌ها به‌صورت کامپوننت React ساخته شده‌اند و می‌توانید
                آن‌ها را داخل صفحات، داشبوردها، لندینگ پیج‌ها و پروژه‌های شخصی
                استفاده کنید.
              </p>

              <p>
                • متن‌ها، رنگ‌ها، دکمه‌ها و استایل هر کارت کاملاً قابل شخصی‌سازی
                هستند و به‌راحتی می‌توانید ظاهر آن‌ها را با طراحی پروژه خود
                هماهنگ کنید.
              </p>

              <p>
                • برای اضافه کردن عملکرد دلخواه می‌توانید پراپ‌های مختلف مانند{" "}
                <code className="rounded-lg bg-white/5 px-2 py-1 text-zinc-300">
                  onClick
                </code>{" "}
                یا لینک‌های اختصاصی خود را استفاده کنید.
              </p>

              <p>
                • بعضی از کارت‌ها ممکن است از{" "}
                <span className="text-white">Framer Motion</span> برای انیمیشن
                استفاده کنند.
              </p>

              <div
                className="
                  overflow-x-auto rounded-2xl
                  border border-white/10
                  bg-black/30
                  px-5 py-4
                  text-sm text-zinc-300
                "
              >
                npm install framer-motion
              </div>

              <p>
                • تمامی کامپوننت‌ها با Tailwind CSS ساخته شده‌اند و روی موبایل
                نیز کاملاً ریسپانسیو هستند.
              </p>

              <p>
                • شما آزاد هستید این کامپوننت‌ها را در پروژه‌های شخصی و تجاری
                خود استفاده کنید ❤️
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* cards */}
      <div className="space-y-14">
        <FadeUp delay={0.2} className="space-y-16">
          <ComponentPreview
            title="Glass Card"
            description="یک کارت مدرن با طراحی شیشه‌ای، افکت نور نرم و استایل مناسب برای داشبوردها و صفحات مدرن."
            code={glassCardCode}
          >
            <GlassCard
              badge="ویژه"
              title="داشبورد مدیریت مدرن"
              description="یک کارت مدرن مناسب برای داشبوردها، صفحات فرود و رابط‌های کاربری امروزی."
              buttonText="مشاهده پروژه"
              footerText="کامپوننت React"
            />
          </ComponentPreview>
          <ComponentPreview
            title="Flip Profile Card"
            description="یک کارت سه‌بعدی مدرن با افکت چرخش هنگام هاور که اطلاعات بیشتری را در پشت کارت نمایش می‌دهد."
            code={flipCardCode}
          >
            <FlipCard
              name="داشبورد مدیریت پروژه"
              role="Next.js • Tailwind • Framer Motion"
              description="طراحی و توسعه یک داشبورد مدرن با رابط کاربری روان، انیمیشن‌های نرم و ساختار کاملاً ریسپانسیو."
            />
          </ComponentPreview>
        </FadeUp>
      </div>
    </div>
  );
}
