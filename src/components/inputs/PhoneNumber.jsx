"use client";

import { useEffect, useState } from "react";

export default function IranPhoneInput() {
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!phone) {
      setStatus("idle");
      return;
    }

    setStatus("checking");

    const timeout = setTimeout(() => {
      const isValid = /^09\d{9}$/.test(phone);

      setStatus(isValid ? "valid" : "invalid");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [phone]);

  const handleChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 11);

    setPhone(digitsOnly);
  };

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-4">
          <p className="mt-1 text-sm text-white/45">
            یک شماره موبایل معتبر که با ۰۹ شروع می‌شود وارد کنید
          </p>
        </div>

        <div className="relative">
          <input
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={handleChange}
            placeholder="۰۹xxxxxxxxx"
            className={`
                w-full rounded-2xl border bg-white/5 px-4 py-4
                text-white placeholder:text-white/25
                outline-none transition-all duration-300
                backdrop-blur-md

                ${
                  status === "valid"
                    ? "border-emerald-400/60 focus:border-emerald-400 shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                    : status === "invalid"
                      ? "border-red-400/60 focus:border-red-400 shadow-[0_0_25px_rgba(239,68,68,0.12)]"
                      : "border-white/10 focus:border-white/30"
                }
              `}
          />

          <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
            {status === "checking" && (
              <div className="h-2 w-2 animate-pulse rounded-full bg-yellow-300" />
            )}

            {status === "valid" && (
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            )}

            {status === "invalid" && phone.length === 11 && (
              <div className="h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(239,68,68,0.8)]" />
            )}
          </div>
        </div>

        <div className="mt-3 min-h-6">
          {status === "checking" && <p className="text-sm text-white/40"></p>}

          {status === "valid" && <p className="text-sm text-emerald-400"></p>}

          {status === "invalid" && (
            <p className="text-sm text-red-400">شماره وارد شده صحیح نمیباشد</p>
          )}
        </div>
      </div>
    </div>
  );
}
