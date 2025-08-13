import React from "react";
import { Download, Menu, Moon, Sun, X } from "lucide-react";

export default function Header({ darkEnabled, toggleDark, resumeUrl, open, setOpen }:{
  darkEnabled: boolean;
  toggleDark: () => void;
  resumeUrl?: string;
  open: boolean;
  setOpen: (v:boolean)=>void;
}){
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            className="rounded-xl p-2 hover:bg-zinc-100 focus:outline-none dark:hover:bg-zinc-900 lg:hidden"
            aria-label="Toggle sidebar"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Kshitiz's Portfolio</div>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="rounded-xl p-2 hover:bg-zinc-100 focus:outline-none dark:hover:bg-zinc-900"
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkEnabled ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          {resumeUrl && resumeUrl !== "#" && (
            <a
              href={resumeUrl}
              className="rounded-xl border px-3 py-1.5 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              <span className="inline-flex items-center gap-1"><Download size={16} /> Resume</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
