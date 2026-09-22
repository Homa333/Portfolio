import React from "react";
import { profile } from "../../data/profile";
export default function Footer(){
  return (
    <footer className="mt-auto border-t bg-white/70 px-4 py-4 text-center text-xs text-zinc-500 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      © {new Date().getFullYear()} {profile.name}. All rights reserved.
    </footer>
  );
}
