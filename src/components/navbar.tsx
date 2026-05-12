"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-brand-outline bg-brand-canvas/80 backdrop-blur-md dark:bg-dark-canvas/80 dark:border-dark-surface">
      <div className="mx-auto max-w-[1280px] px-5 py-6 flex justify-between items-center">
        <Link 
          href="/" 
          className="serif text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          PORTFOLIO
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden md:flex gap-6">
            <Link href="/articles" className="label-caps hover:text-brand-slate relative group transition-colors">
              Articles
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-slate transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link href="/projects" className="label-caps hover:text-brand-slate relative group transition-colors">
              Projects
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-slate transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-brand-outline dark:hover:bg-dark-surface transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
