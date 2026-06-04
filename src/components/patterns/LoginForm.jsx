"use client";

import { useState } from "react";

export default function LoginForm() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fieldClass =
    "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-white placeholder:text-white/25 outline-none transition-all duration-300 backdrop-blur-md focus:border-white/30";

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-4">
          <p className="text-sm text-white/45">
            Enter your credentials to sign in
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className={fieldClass}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className={fieldClass}
          />

          <button
            type="submit"
            className="
              w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4
              text-sm font-medium text-white
              transition-all duration-300
              hover:bg-white/15 hover:border-white/20
              active:scale-[0.99]
            "
          >
            Sign in
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-white/40">
          Don’t have an account?{" "}
          <span className="text-white/70 hover:text-white cursor-pointer transition">
            Sign up
          </span>
        </div>
      </div>
    </div>
  );
}
