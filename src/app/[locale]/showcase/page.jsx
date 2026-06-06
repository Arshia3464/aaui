import React from "react";

const page = () => {
  return (
    <div className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl" />

        <div className="absolute left-0 top-[40%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24">
        {/* hero */}
        <section className="mb-32 max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-emerald-400" />
            Portfolio
          </div>

          <h1 className="mb-8 text-6xl leading-[1.1] font-black tracking-tight md:text-7xl">
            طراحی و توسعه
            <br />
            رابط‌های کاربری مدرن
          </h1>

          <p className="max-w-3xl text-lg leading-9 text-zinc-400">
            مجموعه‌ای از پروژه‌ها، رابط‌های کاربری و تجربه‌های تعاملی که با
            React، Next.js، Tailwind CSS و Framer Motion ساخته‌ام. تمرکز من روی
            ساخت تجربه‌های سریع، مدرن و حرفه‌ای برای وب است.
          </p>
        </section>

        {/* featured */}
        <section className="mb-36">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm text-purple-300">پروژه منتخب</p>

              <h2 className="text-4xl font-bold">داشبورد مدیریت مدرن</h2>
            </div>

            <p className="hidden max-w-md text-sm leading-7 text-zinc-500 lg:block">
              یک پروژه کامل با تمرکز روی طراحی مینیمال، انیمیشن‌های نرم و تجربه
              کاربری حرفه‌ای.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl">
            {/* preview */}
            <div className="relative h-[500px] overflow-hidden border-b border-white/10 bg-zinc-900">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500/20 via-transparent to-cyan-500/10" />

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
            </div>

            {/* content */}
            <div className="grid gap-10 p-10 lg:grid-cols-[1fr_320px] lg:p-14">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  {["Next.js", "Tailwind CSS", "Framer Motion"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <h3 className="mb-6 text-4xl font-bold">
                  پنل مدیریت پروژه و تیم
                </h3>

                <p className="max-w-3xl leading-8 text-zinc-400">
                  طراحی و توسعه یک داشبورد مدرن برای مدیریت پروژه‌ها، کاربران،
                  تحلیل داده‌ها و فعالیت تیم. تمرکز اصلی این پروژه روی تجربه
                  کاربری روان، طراحی مینیمال و ساختار مقیاس‌پذیر بوده است.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-black/20 p-6">
                <div>
                  <p className="mb-2 text-sm text-zinc-500">وضعیت پروژه</p>

                  <p className="mb-8 text-lg font-medium text-emerald-300">
                    Completed
                  </p>

                  <p className="mb-2 text-sm text-zinc-500">تکنولوژی اصلی</p>

                  <p className="text-lg font-medium">Next.js 15</p>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="rounded-2xl bg-white px-5 py-3 font-medium text-black transition-transform hover:scale-[1.02]">
                    مشاهده پروژه
                  </button>

                  <button className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 transition-colors hover:bg-white/[0.06]">
                    مشاهده سورس
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* projects */}
        <section className="mb-36">
          <div className="mb-14">
            <p className="mb-3 text-sm text-cyan-300">سایر پروژه‌ها</p>

            <h2 className="mb-4 text-4xl font-bold">پروژه‌های دیگر</h2>

            <p className="max-w-2xl leading-8 text-zinc-400">
              مجموعه‌ای از لندینگ پیج‌ها، رابط‌های کاربری و پروژه‌های شخصی که
              روی طراحی مدرن و تجربه کاربری تمرکز دارند.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                  group overflow-hidden rounded-[28px]
                  border border-white/10
                  bg-white/[0.03]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-white/20
                "
              >
                {/* preview */}
                <div className="relative h-72 overflow-hidden border-b border-white/10 bg-zinc-900">
                  <div className="absolute inset-0 bg-linear-to-br from-zinc-800 via-zinc-900 to-black" />

                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-linear-to-br from-purple-500/10 to-cyan-500/10" />
                </div>

                {/* content */}
                <div className="p-8">
                  <div className="mb-5 flex items-center gap-2">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      React
                    </span>

                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-400">
                      UI Design
                    </span>
                  </div>

                  <h3 className="mb-4 text-3xl font-bold">
                    لندینگ پیج استارتاپ
                  </h3>

                  <p className="mb-8 leading-8 text-zinc-400">
                    طراحی و توسعه یک صفحه فرود مدرن همراه با انیمیشن‌های نرم،
                    طراحی ریسپانسیو و تمرکز روی تجربه کاربری.
                  </p>

                  <div className="flex items-center justify-between">
                    <button className="text-sm text-white transition-opacity hover:opacity-70">
                      مشاهده پروژه
                    </button>

                    <span className="text-sm text-zinc-500">2026</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* about */}
        <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl lg:p-14">
          <div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative z-10 max-w-4xl">
            <p className="mb-3 text-sm text-purple-300">درباره من</p>

            <h2 className="mb-8 text-4xl font-bold">
              عاشق ساخت تجربه‌های مدرن برای وب
            </h2>

            <p className="text-lg leading-9 text-zinc-400">
              من روی توسعه رابط‌های کاربری مدرن و تعاملی با React و Next.js
              تمرکز دارم. علاقه اصلی من طراحی سیستم‌های قابل توسعه، ساخت
              انیمیشن‌های نرم و ایجاد تجربه‌هایی است که هم زیبا باشند و هم حس
              حرفه‌ای بودن منتقل کنند.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default page;
