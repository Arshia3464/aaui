"use client";

import { useState } from "react";
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
    <div className="rounded-2xl border border-white/10 bg-zinc-900/40 backdrop-blur-xl overflow-hidden">
      {/* Header */}
      <div className="flex items-start justify-between p-6 border-b border-white/10">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>

          {description && (
            <p className="text-sm text-zinc-400 mt-1 font-light max-w-xl">
              {description}
            </p>
          )}
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2">
          {tab === "preview" && (
            <button
              onClick={resetComponent}
              className="px-3 py-1.5 cursor-pointer text-xs rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Reset
            </button>
          )}

          <div className="flex rounded-lg border border-white/10 bg-black/20 p-1">
            <button
              onClick={() => setTab("preview")}
              className={`px-3 py-1.5 cursor-pointer text-xs rounded-md transition ${
                tab === "preview"
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Preview
            </button>

            <button
              onClick={() => setTab("code")}
              className={`px-3 py-1.5 cursor-pointer text-xs rounded-md transition ${
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
      <div className="min-h-62.5  overflow-y-auto flex items-center justify-center">
        {tab === "preview" ? (
          <div className="p-10 flex items-center justify-center">
            <div key={resetKey}>{children}</div>
          </div>
        ) : (
          <div className="relative bg-black/30 w-full min-h-62.5">
            <button
              onClick={copyCode}
              className="absolute cursor-pointer px-3 py-1.5 top-4 right-4 text-xs rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              Copy
            </button>

            <pre className="overflow-x-auto text-sm min-h-62.5 max-h-62.5 overflow-y-auto text-zinc-300">
              <SyntaxHighlighter
                language="jsx"
                style={vscDarkPlus}
                customStyle={{
                  borderRadius: "0px",
                  padding: "20px",
                  fontSize: "14px",
                  margin: "0px",
                  height: "100%",
                }}
              >
                {code}
              </SyntaxHighlighter>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
