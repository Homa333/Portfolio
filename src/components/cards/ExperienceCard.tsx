import React from "react";
type Role = { title:string; company:string; timeframe:string; bullets:string[] };
export default function ExperienceCard({ role }:{ role: Role }){
  return (
    <div className="rounded-2xl border p-5 shadow-sm dark:border-zinc-800">
      <div className="mb-1 text-sm text-zinc-500 dark:text-zinc-400">{role.timeframe}</div>
      <div className="text-lg font-semibold">{role.title}</div>
      <div className="mb-3 text-sm text-zinc-500 dark:text-zinc-400">{role.company}</div>
      <ul className="list-disc space-y-2 pl-5 text-sm">
        {role.bullets.map((b, j) => (<li key={j}>{b}</li>))}
      </ul>
    </div>
  );
}
