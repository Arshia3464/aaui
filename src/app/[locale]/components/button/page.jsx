import { useTranslations } from "next-intl";

import ComponentPreview from "@/components/Preview";

import GlassButton from "@/components/buttons/GlassButton";
import LayerButton from "@/components/buttons/LayerButton";
import GlowButton from "@/components/buttons/GlowButton";
import FigmaButton from "@/components/buttons/FigmaButton";

import fs from "fs";
import path from "path";

const buttonsDir = path.join(process.cwd(), "src/components/buttons");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(buttonsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

const glassButtonCode = getCode("GlassButton");

const layerButtonCode = getCode("LayerButton");

const glowButtonCode = getCode("GlowButton");

const figmaButtonCode = getCode("FigmaButton");

export default function Page() {
  const t = useTranslations("button-page");

  return (
    <div className="space-y-14">
      {/* header */}
      <div className="">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">{t("title")}</h1>

        <p className="leading-7 text-zinc-400 md:text-lg">{t("description")}</p>
      </div>

      {/* usage */}
      <div
        className="
          rounded-3xl border border-white/10
          bg-zinc-900/30
          p-6 md:p-8
          backdrop-blur-xl
        "
      >
        <h2 className="mb-4 text-2xl font-semibold">نحوه استفاده</h2>

        <div className="space-y-4 leading-7 text-zinc-400">
          <p>
            • هر دکمه را می‌توانید مانند یک کامپوننت عادی React داخل پروژه خود
            استفاده کنید.
          </p>

          <p>
            • متن داخل دکمه‌ها کاملاً قابل تغییر است و می‌توانید عباراتی مثل
            «شروع کنید»، «ثبت نام» یا «مشاهده بیشتر» قرار دهید.
          </p>

          <p>
            • برای اجرای عملکرد دلخواه کافی است پراپ{" "}
            <code className="rounded bg-white/5 px-2 py-1 text-zinc-300">
              onClick
            </code>{" "}
            را به دکمه اضافه کنید.
          </p>

          <p>
            • برخی از کامپوننت‌ها ممکن است از{" "}
            <span className="text-white">Framer Motion</span> استفاده کنند. در
            این صورت می‌توانید آن را با دستور زیر نصب کنید:
          </p>

          <div
            className="
              overflow-x-auto rounded-2xl
              border border-white/10
              bg-black/30
              px-4 py-3
              text-sm text-zinc-300 text-left
            "
          >
            npm install framer-motion
          </div>

          <p>
            • تمامی دکمه‌ها با Tailwind CSS ساخته شده‌اند و به‌راحتی می‌توانید
            رنگ، فاصله‌ها، انیمیشن‌ها و ظاهر آن‌ها را شخصی‌سازی کنید.
          </p>

          <p>
            • این کامپوننت‌ها برای صفحات فرود، داشبوردها و رابط‌های مدرن طراحی
            شده‌اند و روی موبایل نیز کاملاً ریسپانسیو هستند.
          </p>
        </div>
      </div>

      {/* glass button */}
      <ComponentPreview
        title={t("GlassButton.title")}
        description={t("GlassButton.description")}
        code={glassButtonCode}
      >
        <GlassButton>Button</GlassButton>
      </ComponentPreview>

      {/* layer button */}
      <ComponentPreview
        title={t("LayerButton.title")}
        description={t("LayerButton.description")}
        code={layerButtonCode}
      >
        <LayerButton>Button</LayerButton>
      </ComponentPreview>

      {/* glow button */}
      <ComponentPreview
        title={t("GlowButton.title")}
        description={t("GlowButton.description")}
        code={glowButtonCode}
      >
        <GlowButton>Button</GlowButton>
      </ComponentPreview>

      {/* figma button */}
      <ComponentPreview
        title="دکمه الهام گرفته از Figma"
        description="
          دکمه‌ای مدرن با انیمیشن‌های نرم و مینیمال که از سبک تعامل وبسایت
          Figma الهام گرفته شده و برای صفحات فرود و رابط‌های مدرن مناسب است.
        "
        code={figmaButtonCode}
      >
        <FigmaButton />
      </ComponentPreview>
    </div>
  );
}
