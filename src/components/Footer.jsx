"use client";

import Link from "next/link";

import { FaGithub, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-40 border-t border-white/10">
      {/* subtle glow */}
      <div className="absolute inset-0 bg-linear-to-t from-white/2 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* left */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Your Library</h3>

            <p className="text-sm text-zinc-500 max-w-sm leading-6">
              Modern reusable UI components and boilerplates built for fast
              development workflows.
            </p>
          </div>

          {/* center links */}
          <div className="flex items-center gap-6 text-sm text-zinc-400">
            <Link
              href="/components"
              className="hover:text-white transition-colors"
            >
              Components
            </Link>

            <Link href="/docs" className="hover:text-white transition-colors">
              Docs
            </Link>

            <Link
              href="/showcase"
              className="hover:text-white transition-colors"
            >
              Showcase
            </Link>
          </div>

          {/* socials */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <FaTwitter size={18} />
            </a>
          </div>
        </div>

        {/* bottom */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>© 2026 Your Library. All rights reserved.</p>

          <p>Built with Next.js, Tailwind CSS and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
