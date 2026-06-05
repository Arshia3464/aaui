"use client";

import { useState } from "react";

import { useLocale } from "next-intl";

import { Link } from "./navigation";

import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const items = [
  {
    title: "General",
    links: [
      { name: "Button", href: "/components/button" },
      { name: "Card", href: "/components/card" },
      { name: "Input", href: "/components/input" },
    ],
  },

  {
    title: "Overlay",
    links: [
      { name: "Modal", href: "/components/modal" },
      { name: "Dropdown", href: "/components/dropdown" },
    ],
  },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const locale = useLocale();

  const isRTL = locale === "fa";

  return (
    <>
      {/* desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-e border-white/10 p-6">
        {items.map((section) => (
          <div key={section.title} className="mb-8">
            <h3 className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
              {section.title}
            </h3>

            <div className="flex flex-col gap-2 text-sm">
              {section.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </aside>

      {/* floating mobile button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/80 text-white shadow-2xl backdrop-blur-xl lg:hidden"
      >
        <HiOutlineMenuAlt3 size={24} />
      </button>

      {/* mobile overlay */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-300 ${
          open
            ? "pointer-events-auto bg-black/60 opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        {/* backdrop */}
        <div className="absolute inset-0" onClick={() => setOpen(false)} />

        {/* drawer */}
        <div
          className={`absolute top-0 h-full w-[280px] bg-zinc-950 transition-transform duration-300 ${
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
            <h2 className="text-lg font-semibold">Components</h2>

            <button
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white"
            >
              <HiX size={20} />
            </button>
          </div>

          {/* links */}
          <div className="overflow-y-auto p-6">
            {items.map((section) => (
              <div key={section.title} className="mb-8">
                <h3 className="mb-3 text-xs uppercase tracking-wider text-zinc-500">
                  {section.title}
                </h3>

                <div className="flex flex-col gap-2 text-sm">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-3 text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
