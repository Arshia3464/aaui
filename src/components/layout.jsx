import Sidebar from "@/components/navigation/sidebar";

export default function ComponentsLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10 flex gap-10">
      <Sidebar />

      <main className="flex-1">{children}</main>
    </div>
  );
}
