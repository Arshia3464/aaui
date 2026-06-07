"use client";

import { useState } from "react";

import { motion } from "framer-motion";

import { toast } from "sonner";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function ComponentPreview({
  title,
  description,
  code,
  children,
}) {
  const [tab, setTab] = useState("preview");

  const [resetKey, setResetKey] = useState(0);

  function resetComponent() {
    setResetKey((prev) => prev + 1);
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);

    toast.success("در کلیپورد کپی شد!");
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{}}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
        delay: 0.5,
      }}
      className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl transition-colors hover:border-white/15"
    >
      {/* Header */}
      <div className="flex flex-col gap-5 border-b border-white/10 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-6">
        {/* title */}
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{title}</h3>

          {description && (
            <p className="mt-1 max-w-xl text-sm font-light leading-6 text-zinc-400">
              {description}
            </p>
          )}
        </div>

        {/* controls */}
        <div className="flex flex-wrap items-center gap-2">
          {tab === "preview" && (
            <button
              onClick={resetComponent}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10"
            >
              Reset
            </button>
          )}

          {/* tabs */}
          <div className="flex rounded-lg border border-white/10 bg-black/20 p-1">
            <button
              onClick={() => setTab("preview")}
              className={`rounded-md px-3 py-1.5 text-xs transition ${
                tab === "preview"
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Preview
            </button>

            <button
              onClick={() => setTab("code")}
              className={`rounded-md px-3 py-1.5 text-xs transition ${
                tab === "code"
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Code
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="min-h-62.5">
        {tab === "preview" ? (
          <div className="flex min-h-62.5 items-center justify-center overflow-x-auto p-6 sm:p-10">
            <div key={resetKey}>{children}</div>
          </div>
        ) : (
          <div className="relative min-h-62.5 w-full bg-black/30">
            {/* copy button */}
            <button
              onClick={copyCode}
              className="absolute right-3 top-3 z-10 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs transition hover:bg-white/10 sm:right-4 sm:top-4"
            >
              Copy
            </button>

            {/* code */}
            <div className="max-h-125 overflow-auto">
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: "0px",
                  padding: "20px",
                  fontSize: "14px",
                  margin: "0px",
                  background: "transparent",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
