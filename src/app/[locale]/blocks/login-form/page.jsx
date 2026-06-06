import fs from "fs";
import path from "path";

import ComponentPreview from "@/components/Preview";

import RegisterFormBlock from "@/components/blocks/RegisterFormBlock";

const blocksDir = path.join(process.cwd(), "src/components/blocks");

function getCode(name) {
  try {
    return fs.readFileSync(path.join(blocksDir, `${name}.jsx`), "utf8");
  } catch {
    return "";
  }
}

const registerFormCode = getCode("RegisterFormBlock");

export const metadata = {
  title: "فرم ثبت‌نام مدرن | بلاک آماده React و Tailwind - AAUI",

  description:
    "فرم ثبت‌نام مدرن و ریسپانسیو ساخته شده با React، Next.js و Tailwind CSS همراه با اعتبارسنجی شماره موبایل ایران، بررسی رمز عبور و طراحی حرفه‌ای.",

  keywords: [
    "فرم ثبت نام",
    "فرم React",
    "Tailwind CSS",
    "Next.js UI",
    "فرم آماده",
    "کامپوننت فرم",
    "فرم ریسپانسیو",
    "فرم مدرن",
    "اعتبارسنجی فرم",
    "React Form",
    "Tailwind Form",
  ],

  openGraph: {
    title: "فرم ثبت‌نام مدرن | AAUI",

    description:
      "بلاک آماده فرم ثبت‌نام با طراحی مدرن، اعتبارسنجی حرفه‌ای و سازگار با React و Tailwind CSS.",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "فرم ثبت‌نام مدرن | AAUI",

    description:
      "فرم آماده و ریسپانسیو برای پروژه‌های React و Next.js همراه با طراحی مدرن.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <div className="space-y-14">
      {/* header */}
      <div className="max-w-3xl">
        <h1 className="mb-4 text-3xl font-bold md:text-4xl">فرم‌های ثبت نام</h1>

        <p className="leading-7 text-zinc-400 md:text-lg">
          مجموعه‌ای از فرم‌های مدرن و ریسپانسیو با طراحی حرفه‌ای، اعتبارسنجی
          پویا و تجربه کاربری روان.
        </p>
      </div>

      {/* register form */}
      <ComponentPreview
        title="فرم ثبت نام مدرن"
        description="
          فرم ثبت نام فارسی با طراحی شیشه‌ای، اعتبارسنجی لحظه‌ای،
          انیمیشن‌های نرم و تجربه کاربری مدرن.
        "
        code={registerFormCode}
      >
        <RegisterFormBlock />
      </ComponentPreview>
    </div>
  );
}
