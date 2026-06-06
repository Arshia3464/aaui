import fs from "fs";
import path from "path";

import { useTranslations } from "next-intl";

import ComponentPreview from "@/components/Preview";

import IranPhoneInput from "@/components/inputs/PhoneNumber";
import EmailInput from "@/components/inputs/EmailInput";
import FloatingLabelInput from "@/components/inputs/FloatingLableInput";

const inputsDir = path.join(process.cwd(), "src/components/inputs");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(inputsDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

const phoneInputCode = getCode("PhoneNumber");

const emailInputCode = getCode("EmailInput");

const floatingLabelInputCode = getCode("FloatingLableInput");

export default function Page() {
  const t = useTranslations("input-page");

  return (
    <div className="space-y-14">
      {/* header */}
      <div className="max-w-3xl">
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
            • هر ورودی را می‌توانید مانند یک کامپوننت عادی React داخل پروژه خود
            استفاده کنید.
          </p>

          <p>
            • متن داخل ورودی کاملاً قابل تغییر است و می‌توانید عباراتی مثل «شروع
            کنید»، «ثبت نام» یا «مشاهده بیشتر» قرار دهید.
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
            • تمامی ورودی با Tailwind CSS ساخته شده‌اند و به‌راحتی می‌توانید
            رنگ، فاصله‌ها، انیمیشن‌ها و ظاهر آن‌ها را شخصی‌سازی کنید.
          </p>

          <p>
            • این کامپوننت‌ها برای صفحات فرود، داشبوردها و رابط‌های مدرن طراحی
            شده‌اند و روی موبایل نیز کاملاً ریسپانسیو هستند.
          </p>
        </div>
      </div>

      {/* phone input */}
      <ComponentPreview
        title={t("IranPhoneInput.title")}
        description={t("IranPhoneInput.description")}
        code={phoneInputCode}
      >
        <IranPhoneInput />
      </ComponentPreview>

      {/* email input */}
      <ComponentPreview
        title={t("EmailInput.title")}
        description={t("EmailInput.description")}
        code={emailInputCode}
      >
        <EmailInput />
      </ComponentPreview>
      <ComponentPreview
        title={t("FloatingLabelInput.title")}
        description={t("FloatingLabelInput.description")}
        code={floatingLabelInputCode}
      >
        <FloatingLabelInput />
      </ComponentPreview>
    </div>
  );
}
