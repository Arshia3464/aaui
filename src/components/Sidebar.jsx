import { Link } from "./navigation";
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
  return (
    <aside className="w-64 border-e border-white/10 p-6 hidden lg:block">
      {items.map((section) => (
        <div key={section.title} className="mb-6">
          <h3 className="text-xs uppercase text-zinc-500 mb-3">
            {section.title}
          </h3>

          <div className="flex flex-col gap-2 text-sm">
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-400 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </aside>
  );
}
