import { useEffect, useState } from "react";
export function useDarkMode(){
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setEnabled(saved ? saved === "dark" : !!prefersDark);
  }, []);
  useEffect(() => {
    const root = document.documentElement;
    if (enabled) { root.classList.add("dark"); localStorage.setItem("theme","dark"); }
    else { root.classList.remove("dark"); localStorage.setItem("theme","light"); }
  }, [enabled]);
  return { enabled, setEnabled };
}
