import React from "react";

const page = () => {
  return (
    <div className="max-w-3xl mb-10 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-4">کامپوننت‌ها</h1>

      <p className="text-muted-foreground mb-6 leading-7">
        مجموعه‌ای از کامپوننت‌های آماده برای ساخت رابط‌های کاربری مدرن با
        Next.js و Tailwind. هر کامپوننت شامل پیش‌نمایش زنده، کد قابل کپی و توضیح
        نحوه استفاده است.
      </p>

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
    </div>
  );
};

export default page;
