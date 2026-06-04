import { patterns } from "@/components/patterns";
import ComponentPreview from "@/components/Preview";

import React from "react";

const page = () => {
  const sorted = [...patterns].sort((a, b) => a.meta.order - b.meta.order);

  return (
    <div className="w-full min-h-dvh space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">الگوها</h1>
      <p className="text-muted-foreground mb-6 leading-7">
        الگوها نمونه‌هایی از ترکیب چند کامپوننت هستند که برای سناریوهای رایج
        طراحی شده‌اند. می‌توانید آن‌ها را به‌صورت کامل در پروژه خود استفاده کنید
        یا فقط به‌عنوان راهنما برای پیاده‌سازی استفاده کنید.
      </p>
      <p>
        این الگوها با طراحی مینیمال ارائه شده‌اند، چون هدف آن‌ها استفاده مستقیم
        در پروژه نیست. این‌ها بیشتر به‌عنوان پایه یا نقطه شروع در نظر گرفته
        شده‌اند تا بتوانید کد را کپی کنید و سریع‌تر توسعه را جلو ببرید.
      </p>
      pاگر به دنبال طراحی‌های کامل‌تر و آماده استفاده هستید، می‌توانید آن‌ها را
      در بخش‌های دیگر سایت پیدا کنید.
      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          • مشاهده کامپوننت در حالت
          <span className="font-medium text-foreground">Preview</span>
        </p>
        <p>
          • مشاهده و کپی کد در بخش
          <span className="font-medium text-foreground">Code</span>
        </p>
        <p>• تنظیمات و گزینه‌های Theme در بالای پیش‌نمایش نمایش داده می‌شوند</p>
        <p>
          • برای بازگرداندن حالت اولیه کامپوننت‌ها از دکمه
          <span className="font-medium text-foreground">Reset</span> استفاده
          کنید
        </p>
      </div>
      {sorted.map((ptrn) => {
        const Component = ptrn.component;

        return (
          <ComponentPreview
            key={ptrn.name}
            title={ptrn.meta.title}
            description={ptrn.meta.description}
            code={ptrn.code}
          >
            <Component></Component>
          </ComponentPreview>
        );
      })}
    </div>
  );
};

export default page;
