"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
        <div className="mb-4">
          <p className="mt-1 text-sm text-white/45">
            Send a message and I'll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            className="
              w-full rounded-2xl border border-white/10 bg-white/5
              px-4 py-4 text-white placeholder:text-white/25
              outline-none transition-all duration-300
              backdrop-blur-md
              focus:border-white/30
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            className="
              w-full rounded-2xl border border-white/10 bg-white/5
              px-4 py-4 text-white placeholder:text-white/25
              outline-none transition-all duration-300
              backdrop-blur-md
              focus:border-white/30
            "
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Your message"
            value={form.message}
            onChange={handleChange}
            className="
              w-full resize-none rounded-2xl border border-white/10 bg-white/5
              px-4 py-4 text-white placeholder:text-white/25
              outline-none transition-all duration-300
              backdrop-blur-md
              focus:border-white/30
            "
          />

          <button
            type="submit"
            className="
              w-full rounded-2xl border border-white/10
              bg-white/10 px-4 py-3
              text-white transition-all duration-300
              hover:bg-white/20 hover:border-white/20
              active:scale-[0.98]
            "
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
