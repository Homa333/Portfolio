import React from "react";
export default function Badge({ children }:{ children: React.ReactNode }){
  return <span className="inline-block rounded-full border px-3 py-1 text-xs dark:border-zinc-700">{children}</span>;
}
