'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Github, Globe, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import type { Project } from '../lib/data';

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`relative overflow-hidden rounded-[2rem] border border-cyan-400/10 bg-slate-950/80 p-6 shadow-xl shadow-cyan-500/5 backdrop-blur-xl ${featured ? 'lg:p-10' : ''}`}>
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-400 via-slate-300 to-slate-400/20" />
      <div className="relative space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">{featured ? 'Featured Project' : 'Project'}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200">{project.category}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{project.subtitle}</p>
          </div>
          <div className="inline-flex items-center gap-3 text-cyan-300">
            <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/20 bg-slate-900/80 p-3 transition hover:border-cyan-300/50">
              <Github size={18} />
            </a>
            <a href={project.live} target="_blank" rel="noreferrer" className="rounded-full border border-cyan-400/20 bg-slate-900/80 p-3 transition hover:border-cyan-300/50">
              <Globe size={18} />
            </a>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[0.8fr_0.4fr]">
          <div className="space-y-5 rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6">
            <p className="text-sm leading-7 text-slate-300">{project.description}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div key={feature} className="rounded-3xl border border-slate-800/90 bg-slate-950/90 px-4 py-3 text-sm text-slate-200">{feature}</div>
              ))}
            </div>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
              View Architecture <ArrowRight size={16} />
            </button>
          </div>
          <div className="rounded-[1.75rem] border border-slate-800/80 bg-gradient-to-br from-slate-950 to-slate-900/95 p-6 text-slate-300 shadow-inner">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Visual Preview</p>
            <div className="mt-6 h-full rounded-[1.5rem] border border-cyan-400/10 bg-slate-950/70 p-6 ring-1 ring-cyan-400/5">
              <div className="flex h-full flex-col justify-between rounded-[1.25rem] bg-slate-900/90 p-6">
                <div className="text-slate-300">{project.preview}</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.badges.map((badge) => (
                    <span key={badge} className="rounded-full border border-slate-800/80 bg-slate-950/90 px-3 py-1 text-xs text-slate-300">{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-8 backdrop-blur-xl">
            <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.96, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-2xl rounded-[2rem] border border-cyan-400/10 bg-slate-950/90 p-8 shadow-2xl">
              <button onClick={() => setOpen(false)} className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800/70 bg-slate-900/80 text-slate-300 transition hover:bg-slate-800">
                <X size={20} />
              </button>
              <h3 className="text-2xl font-semibold text-white">{project.title} Architecture</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Detailed pipeline and research-driven architecture for the project.</p>
              <div className="mt-6 space-y-4">
                {project.architecture.map((item) => (
                  <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5 text-sm text-slate-300">
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={project.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 px-5 py-3 text-sm font-semibold text-cyan-300 border border-cyan-400/20 transition hover:bg-cyan-500/10">
                  View Code <Github size={16} />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Visit Demo <Globe size={16} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
