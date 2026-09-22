import React from "react";
import Badge from "../ui/Badge";
type Project = { name:string; stack:string[]; description:string };
export default function ProjectCard({ project }:{ project: Project }){
  return (
    <div className="rounded-2xl border p-5 shadow-sm dark:border-zinc-800">
      <div className="text-lg font-semibold">{project.name}</div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.stack.map((s, k) => (<Badge key={k}>{s}</Badge>))}
      </div>
    </div>
  );
}
