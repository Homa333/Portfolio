import React from "react";
export default function Section({ id, title, children }:{ id:string; title:string; children: React.ReactNode }){
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <div className="h-px w-full bg-zinc-200 dark:bg-zinc-800" />
      {children}
    </section>
  );
}
