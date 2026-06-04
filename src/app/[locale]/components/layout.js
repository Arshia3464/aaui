import Sidebar from "@/components/Sidebar";
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
