"use client";

import { useEffect, useState } from "react";

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!email) {
      setStatus("idle");
      return;
    }

    setStatus("checking");

    const timeout = setTimeout(() => {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      setStatus(isValid ? "valid" : "invalid");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [email]);

  const handleChange = (e) => {
    setEmail(e.target.value.trim());
  };

  return (
    <div className="w-110">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-7 shadow-2xl backdrop-blur-xl">
        <div className="mb-5">
          <p className="text-sm text-white/45">ایمیل خود را وارد کنید</p>
        </div>

        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            placeholder="yourname@example.com"
            className={`
              w-full rounded-2xl border bg-white/5 px-5 py-5
              text-base text-white placeholder:text-white/25
              outline-none transition-all duration-300
              backdrop-blur-md text-left

              ${
                status === "valid"
                  ? "border-emerald-400/60 focus:border-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]"
                  : status === "invalid"
                    ? "border-red-400/60 focus:border-red-400 shadow-[0_0_30px_rgba(239,68,68,0.12)]"
                    : "border-white/10 focus:border-white/30"
              }
            `}
          />

          <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
            {status === "checking" && (
              <div className="h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-300" />
            )}

            {status === "valid" && (
              <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(16,185,129,0.8)]" />
            )}

            {status === "invalid" && email.length > 3 && (
              <div className="h-3 w-3 rounded-full bg-red-400 shadow-[0_0_14px_rgba(239,68,68,0.8)]" />
            )}
          </div>
        </div>

        <div className="mt-4 min-h-6">
          {status === "invalid" && (
            <p className="text-sm text-red-400">ایمیل صحیح نمیباشد!</p>
          )}
        </div>
      </div>
    </div>
  );
}
