import "../globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import localFont from "next/font/local";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";

const vazirmatn = localFont({
  src: "../fonts/Vazirmatn[wght].woff2",
  weight: "100 900",
  display: "swap",
});

export async function generateMetadata({ params }) {
  const { locale } = await params;

  const metadata =
    locale === "fa"
      ? {
          title: "AAUI | کامپوننت‌های React و Next.js با Tailwind CSS",
          description:
            "مجموعه‌ای از کامپوننت‌ها، بلاک‌ها و لایه‌بندی‌های مدرن برای ساخت رابط‌های کاربری حرفه‌ای با React، Next.js و Tailwind CSS.",
        }
      : {
          title:
            "AAUI | Modern React & Next.js UI Components Built with Tailwind CSS",
          description:
            "A collection of modern UI components, blocks, and layouts for building professional interfaces with React, Next.js, and Tailwind CSS.",
        };

  return {
    ...metadata,

    alternates: {
      canonical: `https://aaui.dev/${locale}`,
      languages: {
        en: "https://aaui.dev/en",
        fa: "https://aaui.dev/fa",
      },
    },

    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://aaui.dev/${locale}`,
      siteName: "AAUI",
      locale: locale === "fa" ? "fa_IR" : "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
    },
  };
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  // Allowed locales
  const locales = ["en", "fa"];
  if (!locales.includes(locale)) notFound();

  // Load translation messages for this locale
  let messages;

  switch (locale) {
    case "en":
      messages = (await import("../../messages/en.json")).default;
      break;
    case "fa":
      messages = (await import("../../messages/fa.json")).default;
      break;
    default:
      notFound();
  }

  // Direction setting
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} className="h-full antialiased">
      <body
        className={`min-h-full flex flex-col bg-zinc-950 text-zinc-200 ${vazirmatn.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>

        <Toaster
          position="top-center"
          theme="dark"
          richColors
          toastOptions={{
            className:
              "!bg-zinc-900/80 !border !border-white/10 !text-white !backdrop-blur-xl",
          }}
        />
      </body>
    </html>
  );
}
