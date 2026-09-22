import React, { useState } from "react";
import { profile } from "./data/profile";
import { projects } from "./data/projects";
import { useDarkMode } from "./hooks/useDarkMode";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import Section from "./components/ui/Section";
import Badge from "./components/ui/Badge";
import ExperienceCard from "./components/cards/ExperienceCard";
import ProjectCard from "./components/cards/ProjectCard";

export default function App(){
  const { enabled, setEnabled } = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col">
        <Header darkEnabled={enabled} toggleDark={()=>setEnabled(!enabled)} resumeUrl={profile.links.resumeUrl} open={open} setOpen={setOpen} />
        <div className="flex flex-1">
          <Sidebar open={open} setOpen={setOpen} />
          <main className="ml-0 flex-1 space-y-12 p-6 lg:ml-6 lg:p-10">
            <Section id="about" title="About">
              <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">{profile.summary}</p>
            </Section>
            <Section id="experience" title="Experience">
              <div className="grid gap-4 md:grid-cols-1">
                {profile.experience.map((role, i) => (<ExperienceCard key={i} role={role as any} />))}
              </div>
            </Section>
            <Section id="projects" title="Projects">
              <div className="grid gap-4 md:grid-cols-3">
                {projects.map((p, i) => (<ProjectCard key={i} project={p as any} />))}
              </div>
            </Section>
            <Section id="skills" title="Skills">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border p-5 dark:border-zinc-800">
                  <div className="mb-2 font-medium">Languages</div>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.languages.map((s, i) => (<Badge key={i}>{s}</Badge>))}
                  </div>
                </div>
                <div className="rounded-2xl border p-5 dark:border-zinc-800">
                  <div className="mb-2 font-medium">Frameworks</div>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.frameworks.map((s, i) => (<Badge key={i}>{s}</Badge>))}
                  </div>
                </div>
                <div className="rounded-2xl border p-5 dark:border-zinc-800">
                  <div className="mb-2 font-medium">Infra & Tools</div>
                  <div className="flex flex-wrap gap-2">
                    {[...profile.skills.infra, ...profile.skills.tools].map((s, i) => (<Badge key={i}>{s}</Badge>))}
                  </div>
                </div>
              </div>
            </Section>
            <Section id="education" title="Education">
              <div className="space-y-3">
                {profile.education.map((e, i) => (
                  <div key={i} className="rounded-2xl border p-5 dark:border-zinc-800">
                    <div className="font-medium">{e.degree}</div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">{e.detail}</div>
                  </div>
                ))}
              </div>
            </Section>
            <Section id="interests" title="Interests">
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((it, idx) => (<Badge key={idx}>{it}</Badge>))}
              </div>
            </Section>
            <Section id="contact" title="Contact">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                {profile.links.email && (
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={`mailto:${profile.links.email}`}>
                    {profile.links.email}
                  </a>
                )}
                {profile.links.github && (
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.github}>
                    GitHub
                  </a>
                )}
                {profile.links.linkedin && (
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.linkedin}>
                    LinkedIn
                  </a>
                )}
                {profile.links.website && (
                  <a className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900" href={profile.links.website}>
                    Website
                  </a>
                )}
              </div>
            </Section>
            <div className="h-8" />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
}
