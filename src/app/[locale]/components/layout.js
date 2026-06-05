import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: " کامپوننت‌های مدرن Next.js و Tailwind | AAUI",
  description:
    "مجموعه‌ای از کامپوننت‌های آماده، قابل شخصی‌سازی و ریسپانسیو برای ساخت رابط‌های کاربری مدرن با React، Next.js و Tailwind CSS.",
  robots: {
    index: true,

    follow: true,
  },
};
export default function ComponentsLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
