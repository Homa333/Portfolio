import React from "react";
import { Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "../../data/profile";

export default function Sidebar({ open, setOpen }:{ open:boolean; setOpen:(v:boolean)=>void; }){
  const nav = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "interests", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];
  return (
    <aside
      className={`${open ? "translate-x-0" : "-translate-x-full"} fixed left-0 top-[52px] z-40 h-[calc(100dvh-52px)] w-72 border-r bg-white p-4 transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-950 lg:static lg:translate-x-0`}
    >
      <div className="mb-4 space-y-1">
        <img
          src="/profile.jpg"
          alt={profile.name}
          className="mx-auto mb-3 h-24 w-24 rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-700"
        />
        <h1 className="text-2xl font-bold tracking-tight">{profile.name}</h1>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <MapPin size={14} /> {profile.location}
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.tagline}</p>
        <div className="mt-4 flex gap-2">
          {profile.links.github && (
            <a className="rounded-xl border p-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.github}>
              <Github size={16} />
            </a>
          )}
          {profile.links.linkedin && (
            <a className="rounded-xl border p-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.linkedin}>
              <Linkedin size={16} />
            </a>
          )}
          {profile.links.website && (
            <a className="rounded-xl border p-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.website}>
              <Globe size={16} />
            </a>
          )}
          {profile.links.email && (
            <a className="rounded-xl border p-2 text-sm hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={`mailto:${profile.links.email}`}>
              <Mail size={16} />
            </a>
          )}
        </div>
      </div>
      <nav className="space-y-1">
        {nav.map((n) => (
          <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-900">
            {n.label}
          </a>
        ))}
      </nav>
      <div className="mt-6 space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-zinc-400">Highlights</div>
        <ul className="list-disc space-y-2 pl-5 text-sm">
          {profile.highlights.map((h, i) => (<li key={i}>{h}</li>))}
        </ul>
      </div>
    </aside>
  );
}
