"use client";

import { useState } from "react";

import { useLocale } from "next-intl";

import { usePathname } from "next/navigation";

import { Link } from "./navigation";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const items = [
  {
    title: "عمومی",
    links: [
      { name: "دکمه", href: "/components/button" },
      { name: "کارت", href: "/components/card" },
      { name: "ورودی", href: "/components/input" },
    ],
  },

  {
    title: "پوشش",
    links: [
      { name: "مودال", href: "/components/modal" },
      { name: "منوی کشویی", href: "/components/dropdown" },
    ],
  },

  {
    title: "فرم‌ها و ورودی",
    links: [
      { name: "چک‌باکس", href: "/components/checkbox" },
      { name: "گروه رادیویی", href: "/components/radio-group" },
      { name: "انتخاب", href: "/components/select" },
      { name: "متن‌باکس", href: "/components/textarea" },
      { name: "سوئیچ", href: "/components/switch" },
      { name: "لغزنده", href: "/components/slider" },
      { name: "انتخاب تاریخ", href: "/components/date-picker" },
    ],
  },

  {
    title: "ناوبری و چیدمان",
    links: [
      { name: "نوار ناوبری", href: "/components/navbar" },
      { name: "نوار کناری", href: "/components/sidebar" },
      { name: "تب‌ها", href: "/components/tabs" },
      { name: "مسیر ناوبری", href: "/components/breadcrumb" },
      { name: "صفحه‌بندی", href: "/components/pagination" },
      { name: "آکاردئون", href: "/components/accordion" },
      { name: "جداکننده", href: "/components/divider" },
    ],
  },

  {
    title: "داده و بازخورد",
    links: [
      { name: "جدول", href: "/components/table" },
      { name: "نشان", href: "/components/badge" },
      { name: "آواتار", href: "/components/avatar" },
      { name: "راهنمای ابزار", href: "/components/tooltip" },
      { name: "هشدار", href: "/components/alert" },
      { name: "اعلان", href: "/components/toast" },
      { name: "نوار پیشرفت", href: "/components/progress" },
    ],
  },

  {
    title: "پیشرفته",
    links: [
      { name: "منوی فرمان", href: "/components/command-menu" },
      { name: "آپلود فایل", href: "/components/file-upload" },
      { name: "تقویم", href: "/components/calendar" },
      { name: "چرخ‌فلک", href: "/components/carousel" },
      { name: "ویرایشگر متن غنی", href: "/components/rich-text-editor" },
      { name: "رابط چت", href: "/components/chat-interface" },
      { name: "خط زمانی", href: "/components/timeline" },
    ],
  },
];
export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const locale = useLocale();

  const pathname = usePathname();

  const isRTL = locale === "fa";

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-e border-white/10 p-2">
        {items.map((section, index) => (
          <div key={section.title} className="mb-2">
            {index !== 0 && (
              <div className="w-full h-px bg-foreground/15"></div>
            )}

            <div className="flex flex-col gap-0.5 text-sm">
              {section.links.map((link) => {
                const isActive = pathname.startsWith(`/${locale}${link.href}`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-lg px-1 py-2 transition-all duration-200 border ${
                      isActive
                        ? "border-accent/10 bg-primary/15 text-foreground"
                        : "border-transparent text-foreground/60 hover:bg-primary/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </aside>

      {/* floating mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/60 text-white shadow-2xl backdrop-blur-xl lg:hidden"
      >
        <HiOutlineMenuAlt3 size={24} />
      </button>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          open
            ? "pointer-events-auto bg-black/70 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0" onClick={() => setOpen(false)} />

        {/* drawer */}
        <div
          className={`absolute top-0 h-full w-[280px] bg-black/90 backdrop-blur-xl transition-transform duration-300 ${
            isRTL
              ? `
                right-0 border-l border-white/10
                ${open ? "translate-x-0" : "translate-x-full"}
              `
              : `
                left-0 border-r border-white/10
                ${open ? "translate-x-0" : "-translate-x-full"}
              `
          }`}
        >
          {/* top */}
          <div className="flex items-center justify-between border-b border-white/10 p-6">
            <h2 className="text-lg font-semibold text-white">Components</h2>

            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* links */}
          <div className="overflow-y-auto p-6">
            {items.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="mb-3 text-xs uppercase tracking-wider text-white/40">
                  {section.title}
                </h3>

                <div className="flex flex-col gap-2 text-sm">
                  {section.links.map((link) => {
                    const isActive = pathname.startsWith(
                      `/${locale}${link.href}`,
                    );

                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`rounded-xl px-3 py-3 transition-all duration-200 border ${
                          isActive
                            ? "border-white/10 bg-violet-500/15 text-white shadow-[0_0_30px_rgba(124,58,237,0.25)]"
                            : "border-transparent text-white/60 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
