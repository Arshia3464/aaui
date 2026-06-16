import { useTranslations } from "next-intl";

import ComponentPreview from "@/components/Preview";

import GlassButton from "@/components/buttons/GlassButton";
import LayerButton from "@/components/buttons/LayerButton";
import FigmaButton from "@/components/buttons/FigmaButton";

import fs from "fs";
import path from "path";
import FadeUp from "@/components/FadeUp";
import DownloadButton from "@/components/buttons/DownloadButton";

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
const figmaButtonCode = getCode("FigmaButton");

export default function Page() {
  const t = useTranslations("button-page");

  return (
    <div className="space-y-8">
      {/* header */}
      <FadeUp delay={0}>
        <div>
          <h1 className="mb-4 text-xl font-bold md:text-3xl">{t("title")}</h1>
          <p className="leading-7 text-sm text-foreground/60 md:text-lg">
            {t("description")}
          </p>
        </div>
      </FadeUp>

      {/* usage */}
      <FadeUp delay={0.2}>
        <div className="rounded-xl border border-foreground/20 bg-secondary/20 p-3 md:p-4 backdrop-blur-xl">
          <h2 className="mb-2 text-xl font-semibold">نحوه استفاده</h2>
          <div className="space-y-1 leading-7 text-sm text-foreground/80">
            <p>
              • هر دکمه را می‌توانید مانند یک کامپوننت عادی React داخل پروژه خود
              استفاده کنید.
            </p>
            <p>
              • متن داخل دکمه‌ها کاملاً قابل تغییر است و می‌توانید عباراتی مثل
              «شروع کنید»، «ثبت نام» یا «مشاهده بیشتر» قرار دهید.
            </p>
            <p>
              • برای اجرای عملکرد دلخواه کافی است پراپ
              <code className="rounded text-sm bg-foreground/5 px-2 py-1 text-foreground/80">
                onClick
              </code>
              را به دکمه اضافه کنید.
            </p>
            <p>
              • برخی از کامپوننت‌ها ممکن است از
              <span className="text-foreground">Framer Motion</span> استفاده
              کنند. در این صورت می‌توانید آن را با دستور زیر نصب کنید:
            </p>
            <div className="overflow-x-auto rounded-2xl border border-foreground/10 bg-background/30 px-4 py-3 text-sm text-foreground/80 text-left">
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
      </FadeUp>

      {/* grid of button previews */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2">
        <ComponentPreview
          size="small"
          title={t("GlassButton.title")}
          description={t("GlassButton.description")}
          code={glassButtonCode}
        >
          <GlassButton>Button</GlassButton>
        </ComponentPreview>

        <ComponentPreview
          size="small"
          title={t("LayerButton.title")}
          description={t("LayerButton.description")}
          code={layerButtonCode}
        >
          <LayerButton>Button</LayerButton>
        </ComponentPreview>

        <ComponentPreview
          size="small"
          title="دکمه الهام گرفته از Figma"
          description="دکمه‌ای مدرن با انیمیشن‌های نرم و مینیمال که از سبک تعامل وبسایت Figma الهام گرفته شده."
          code={figmaButtonCode}
        >
          <FigmaButton />
        </ComponentPreview>

        <ComponentPreview
          size="small"
          title="دکمه دانلود با پیشرفت انیمیشن"
          description="دکمه‌ای با انیمیشن پیشرفت که هنگام کلیک، یک نوار پیشرفت دور دکمه را پر می‌کند."
          code={getCode("DownloadButton")}
        >
          <DownloadButton>دانلود</DownloadButton>
        </ComponentPreview>
      </div>
    </div>
  );
}
