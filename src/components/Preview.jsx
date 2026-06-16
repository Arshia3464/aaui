"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { toast } from "sonner";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import { HiX } from "react-icons/hi";

function CodeModal({ code, onClose }) {
  async function copyCode() {
    await navigator.clipboard.writeText(code);
    toast.success("در کلیپورد کپی شد!");
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-80 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl max-h-[80vh] overflow-hidden rounded-2xl border border-primary/20 bg-secondary/90 backdrop-blur-xl shadow-2xl"
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-primary/10 px-5 py-3">
            <span className="text-sm font-medium text-foreground/70">
              Source
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={copyCode}
                className="rounded-lg border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs transition hover:bg-primary/20 hover:border-primary/20"
              >
                Copy
              </button>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-primary/10 bg-primary/10 text-foreground/60 transition hover:bg-primary/20 hover:text-foreground"
              >
                <HiX size={14} />
              </button>
            </div>
          </div>

          {/* Code */}
          <div className="overflow-auto max-h-[calc(80vh-52px)]">
            <SyntaxHighlighter
              language="jsx"
              style={vscDarkPlus}
              customStyle={{
                borderRadius: "0px",
                padding: "20px",
                fontSize: "13px",
                margin: "0px",
                background: "transparent",
              }}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ComponentPreview({
  title,
  description,
  code,
  children,
  size, // "small" for compact grid cards, default for full-width
}) {
  const isSmall = size === "small";

  const [tab, setTab] = useState("preview");

  const [resetKey, setResetKey] = useState(0);

  const [codeModalOpen, setCodeModalOpen] = useState(false);

  function resetComponent() {
    setResetKey((prev) => prev + 1);
  }

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    toast.success("در کلیپورد کپی شد!");
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{}}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.35, ease: "easeOut", delay: 0.5 }}
        className="overflow-hidden rounded-sm border border-secondary/30 bg-secondary/10 backdrop-blur-xl transition-colors hover:border-primary/20"
      >
        {/* Header */}
        {isSmall ? (
          // Small: single tight row — title on left, controls on right, never wraps
          <div className="flex items-center justify-between gap-2 border-b border-secondary/10 px-3 py-2">
            <h3 className="truncate text-xs font-semibold text-foreground leading-none">
              {title}
            </h3>

            <div className="flex shrink-0 items-center gap-1.5">
              <button
                onClick={resetComponent}
                className="rounded-md border border-primary/10 bg-primary/10 px-2 py-1 text-[10px] leading-none transition hover:bg-primary/20"
              >
                Reset
              </button>

              <div className="flex rounded-md border border-primary/10 bg-secondary/20 p-0.5">
                <button
                  onClick={() => setTab("preview")}
                  className={`rounded px-2 py-1 text-[10px] leading-none transition ${
                    tab === "preview"
                      ? "bg-primary/15 text-foreground border border-primary/20"
                      : "text-foreground/60"
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setCodeModalOpen(true)}
                  className="rounded px-2 py-1 text-[10px] leading-none text-foreground/60 transition hover:text-foreground"
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Default: original full layout
          <div className="flex flex-col gap-5 border-b border-primary/10 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-6">
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              {description && (
                <p className="mt-1 max-w-xl text-sm font-light leading-6 text-foreground">
                  {description}
                </p>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {tab === "preview" && (
                <button
                  onClick={resetComponent}
                  className="rounded-lg border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs transition hover:bg-primary/20 hover:border-primary/20"
                >
                  Reset
                </button>
              )}
              <div className="flex rounded-lg border border-primary/10 bg-secondary/20 p-1">
                <button
                  onClick={() => setTab("preview")}
                  className={`rounded-md px-3 py-1.5 text-xs transition ${
                    tab === "preview"
                      ? "bg-primary/15 text-foreground border border-primary/20"
                      : "text-foreground/60"
                  }`}
                >
                  Preview
                </button>
                <button
                  onClick={() => setTab("code")}
                  className={`rounded-md px-3 py-1.5 text-xs transition ${
                    tab === "code"
                      ? "bg-primary/15 text-foreground border border-primary/20"
                      : "text-foreground/60"
                  }`}
                >
                  Code
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div
          className={`bg-background/20 ${isSmall ? "min-h-40" : "min-h-62.5"}`}
        >
          {tab === "preview" || isSmall ? (
            <div
              className={`flex items-center justify-center overflow-x-auto ${
                isSmall ? "min-h-40 p-4" : "min-h-62.5 p-6 sm:p-10"
              }`}
            >
              <div key={resetKey}>{children}</div>
            </div>
          ) : (
            <div className="relative min-h-62.5 w-full bg-secondary/30">
              {/* Copy button */}
              <button
                onClick={copyCode}
                className="absolute right-3 top-3 z-10 rounded-lg border border-primary/10 bg-primary/10 px-3 py-1.5 text-xs transition hover:bg-primary/20 hover:border-primary/20 sm:right-4 sm:top-4"
              >
                Copy
              </button>

              {/* Code */}
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

      {/* Code modal — only used in small mode */}
      {isSmall && codeModalOpen && (
        <CodeModal code={code} onClose={() => setCodeModalOpen(false)} />
      )}
    </>
  );
}
