import { inputs } from "@/components/inputs";
import ComponentPreview from "@/components/Preview";

export default function Page() {
  const sorted = [...inputs].sort((a, b) => a.meta.order - b.meta.order);

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-semibold mb-2">ورودی ها</h1>
        <p className="text-zinc-400">
          مجموعه‌ای از کامپوننت‌های Input همراه با پیش‌نمایش زنده.
        </p>
        <p className="text-zinc-400 font-light">
          مجموعه‌ای از کامپوننت‌های Input همراه با پیش‌نمایش زنده.
        </p>
        <p className="text-zinc-400 font-extralight">
          مجموعه‌ای از کامپوننت‌های Input همراه با پیش‌نمایش زنده.
        </p>
        <p className="text-white/50 font-extralight">
          مجموعه‌ای از کامپوننت‌های Input همراه با پیش‌نمایش زنده.
        </p>
      </div>

      {sorted.map((input) => {
        const Component = input.component;

        return (
          <ComponentPreview
            key={input.name}
            title={input.meta.title}
            description={input.meta.description}
            code={input.code}
          >
            <Component></Component>
          </ComponentPreview>
        );
      })}
    </div>
  );
}
