import { buttons } from "@/components/buttons";
import ComponentPreview from "@/components/Preview";

export default function Page() {
  const sorted = [...buttons].sort((a, b) => a.meta.order - b.meta.order);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-2">دکمه ها</h1>
        <p className="text-zinc-400">
          مجموعه‌ای از کامپوننت‌های Button به‌همراه پیش‌نمایش.
        </p>
      </div>

      {sorted.map((btn) => {
        const Component = btn.component;

        return (
          <ComponentPreview
            key={btn.name}
            title={btn.meta.title}
            description={btn.meta.description}
            code={btn.code}
          >
            <Component>Button</Component>
          </ComponentPreview>
        );
      })}
    </div>
  );
}
