'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  ShieldCheck,
  Star,
  Cpu,
  Globe,
} from 'lucide-react';
import { ProjectCard } from '../components/ProjectCard';
import { SectionHeading } from '../components/SectionHeading';
import { TimelineItem } from '../components/TimelineItem';
import { ThemeToggle } from '../components/ThemeToggle';
import { data } from '../lib/data';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(data.projects.map((project) => project.category)))];

  const filteredProjects = activeFilter === 'All'
    ? data.projects
    : data.projects.filter((project) => project.category === activeFilter);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#020617] text-slate-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(23,155,255,0.18),_transparent_28%),radial-gradient(circle_at_30%_20%,_rgba(87,225,255,0.12),_transparent_20%)] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.08),_transparent_24%)] opacity-90" />
      <div className="relative mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <header className="flex flex-col gap-6 border-b border-slate-800/80 pb-6 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-slate-950/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-xl">
              · Data Science  · AI · XR/AR/MR · Applied Research
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm sm:text-base">
              <span className="text-slate-400">Akash Pallam</span>
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
              <span className="text-slate-400"> Data Science & Machine Learning Engineer | Python, AWS| Passionate about AI-Driven Insights & Cloud Solutions
                  AI/ML Engineer | Unity XR Developer</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <nav className="hidden gap-4 text-sm text-slate-300 md:flex">
              <a href="#projects" className="transition hover:text-cyan-300">Projects</a>
              <a href="#research" className="transition hover:text-cyan-300">Research</a>
              <a href="#skills" className="transition hover:text-cyan-300">Skills</a>
              <a href="#contact" className="transition hover:text-cyan-300">Contact</a>
            </nav>
          </div>
        </header>

        <section className="relative mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.8 }} className="space-y-7">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-slate-950/30 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-xl">
              .
            </div>
            <div className="space-y-5">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/80">Akash Pallam</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-[-0.05em] text-white sm:text-6xl">
                Building Intelligent XR Systems
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Data Science | AI/ML | Unity AR/MR/XR Developer | Computer Vision Researcher. Designing premium AR/VR experiences, accessibility AI, and real-time systems for immersive research labs and product-grade deployments.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-cyan-400">
                View Projects <ArrowRight size={18} />
              </a>
              <a href="/resume.pdf" className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-slate-950/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300">
                Download Resume <Download size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-700/90 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300 hover:text-cyan-300">
                Contact Me <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="rounded-[1.75rem] theme-card p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="text-sm text-slate-400">Projects Built</p>
                <p className="mt-4 text-3xl font-semibold text-white">18+</p>
              </div>
              <div className="rounded-[1.75rem] theme-card p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="text-sm text-slate-400">Research Domains</p>
                <p className="mt-4 text-3xl font-semibold text-white">6</p>
              </div>
              <div className="rounded-[1.75rem] theme-card p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="text-sm text-slate-400">XR / AR Systems</p>
                <p className="mt-4 text-3xl font-semibold text-white">12+</p>
              </div>
              <div className="rounded-[1.75rem] theme-card p-5 text-center transition hover:-translate-y-1 hover:border-cyan-300/20">
                <p className="text-sm text-slate-400">Certifications</p>
                <p className="mt-4 text-3xl font-semibold text-white">8+</p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }} className="relative mx-auto w-full max-w-lg">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-slate-900/10 to-slate-950 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-cyan-400/20 bg-slate-950/80 p-8 shadow-glow backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_transparent_30%)]" />
              <div className="relative z-10">
                <div className="flex items-center justify-between gap-3 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-4 text-slate-300">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">Current Focus</p>
                    <p className="mt-2 text-lg font-semibold text-white">Intelligent XR Systems</p>
                  </div>
                  <div className="rounded-3xl bg-cyan-500/10 px-3 py-2 text-cyan-200">Live</div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {['AI', 'XR', 'Unity', 'Vision'].map((label) => (
                    <div key={label} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 text-center">
                      <p className="text-sm uppercase tracking-[0.25em] text-slate-500">{label}</p>
                      <p className="mt-3 text-xl font-semibold text-white">{label === 'AI' ? '99+' : label === 'XR' ? '19+' : label === 'Unity' ? '7+' : '12+'}</p>
                    </div>
                  ))}
                </div>
                <div className="relative mt-10 h-72 rounded-[1.75rem] border border-cyan-400/10 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900/30 p-5 shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.16),_transparent_32%)]" />
                  <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 shadow-[0_0_120px_rgba(56,189,248,0.22)]" />
                  <div className="absolute top-8 left-8 h-14 w-14 rounded-full border border-cyan-300/30 bg-cyan-300/10 blur-sm" />
                  <div className="absolute bottom-10 right-10 h-24 w-24 rounded-full border border-cyan-400/20 bg-cyan-400/5 blur-sm" />
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <div className="grid h-48 w-48 place-items-center rounded-full border border-cyan-300/20 bg-slate-950/70 shadow-[0_0_120px_rgba(56,189,248,0.08)]">
                      <span className="text-5xl font-semibold text-cyan-200">XR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mt-24 space-y-8">
          <SectionHeading number="01" title="About Akash" subtitle="Applied research, XR systems, and intelligent accessibility solutions." />
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <motion.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.75 }} className="rounded-[2rem] theme-panel p-8">
              <p className="text-lg leading-8 text-slate-300">
                I design research-grade AI experiences for XR, AR, and real-time vision systems. My work bridges Unity, computer vision, and accessibility AI with applied research in immersive environments. I specialize in building high-precision live systems for translation, motion analysis, and adaptive interfaces that feel grounded, fast, and scientifically rigorous.
              </p>
              <div className="mt-10 space-y-4">
                <div className="flex items-start gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <ShieldCheck className="mt-1 h-6 w-6 text-cyan-300" />
                  <div>
                    <p className="font-semibold text-white">IIT Hyderabad AR/VR Training,Unity & Sentis Development </p>
                    <p className="mt-1 text-sm text-slate-400">Structured XR test engineering, immersive prototyping, and device-specific usability validation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <Cpu className="mt-1 h-6 w-6 text-cyan-300" />
                  <div>
                    <p className="font-semibold text-white">Data Science & Machine Learning Trainee  </p>
                    <p className="mt-1 text-sm text-slate-400">Completed hands-on training in Python, Data science, and Machine Learning 
                      •  Worked on real-world datasets for classification and prediction problems 
                      •  Implemented ML algorithms including Linear Regression, Decision Trees, Random Forest, and SVM 
                      •  Performed data cleaning, feature selection, and model evaluation and model tunning 
                      •  Applied concepts through projects such as Semiconductor Manufacturing Yield Prediction Process..</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <Globe className="mt-1 h-6 w-6 text-cyan-300" />
                  <div>
                    <p className="font-semibold text-white">Accessibility AI & Computer Vision</p>
                    <p className="mt-1 text-sm text-slate-400">Speech-to-sign translation, emotion understanding, and assistive perception frameworks for inclusive XR.</p>
                  </div>
                </div>
              </div>
            </motion.article>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.75, delay: 0.2 }} className="grid gap-4">
              {data.stats.map((stat) => (
                <div key={stat.label} className="rounded-[1.75rem] theme-card p-6 text-center transition hover:-translate-y-1 hover:border-cyan-300/20">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.3em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="mt-28 space-y-10">
          <SectionHeading number="02" title="Featured Projects" subtitle="High-impact AI & XR systems with architecture-first execution." />
          <div className="flex flex-wrap items-center justify-between gap-4 rounded-[1.75rem] border border-cyan-400/10 bg-slate-950/70 p-4 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Filter by domain:</p>
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === filter
                      ? 'border border-cyan-300 bg-cyan-500/10 text-cyan-200'
                      : 'border border-slate-800/80 bg-slate-900/80 text-slate-300 hover:border-cyan-300 hover:text-cyan-200'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} featured={index === 0 && activeFilter === 'All'} />
            ))}
          </div>
        </section>

        <section id="research" className="mt-28 space-y-10">
          <SectionHeading number="03" title="Research & Experience" subtitle="IIT Hyderabad training, XR evaluation, and performance-first engineering." />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] theme-panel p-8">
              <p className="text-slate-400">Research-grade systems are built from evidence, instrumentation, and user-centered validation. My focus has been on Unity XR tools, motion sickness mitigation, and performance analysis for immersive applications.</p>
              <div className="mt-8 space-y-4">
                {data.researchHighlights.map((item) => (
                  <div key={item.title} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {data.timeline.map((item) => (
                <TimelineItem key={item.year} item={item} />
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mt-28 space-y-10">
          <SectionHeading number="04" title="Technical Stack" subtitle="Animated categories for modern AI, XR, backend, and cloud infrastructure." />
          <div className="grid gap-6 lg:grid-cols-2">
            {data.skillCategories.map((category) => (
              <motion.div key={category.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] theme-panel p-8">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Sparkles className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-400">{category.description}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 text-sm text-slate-200 transition hover:border-cyan-300/40 hover:text-cyan-200">
                      {skill}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="certifications" className="mt-28 space-y-8">
          <SectionHeading number="05" title="Certifications" subtitle="Formal achievements aligned with AI, cloud, and immersive research." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {data.certifications.map((cert) => (
              <motion.div key={cert.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="rounded-[2rem] theme-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">{cert.provider}</p>
                <h3 className="mt-4 text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{cert.note}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="achievements" className="mt-28 space-y-8">
          <SectionHeading number="06" title="Achievements" subtitle="Recognized for research-driven execution, hackathon innovation, and quality engineering." />
          <div className="grid gap-6 lg:grid-cols-3">
            {data.achievements.map((achievement) => (
              <motion.div key={achievement.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="rounded-[2rem] theme-card p-6 transition hover:-translate-y-1 hover:border-cyan-300/30">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Star className="h-5 w-5" />
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{achievement.category}</p>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{achievement.title}</h3>
                <p className="mt-3 text-sm text-slate-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-28 rounded-[2rem] theme-panel p-8">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <SectionHeading number="07" title="Contact" subtitle="Let’s collaborate on ambitious XR, AI, and accessibility research." />
              <p className="max-w-xl text-slate-300">I’m available for research collaborations and AI and Data Sciene, AI/XR engineering, and startup partnerships. Reach out for detailed project discussions, technical proposals, or long-term engineering roles.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akashpallam13@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="your-existing-styles"
                    >
                    akashpallam13@gmail.com 
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">GitHub</p>
                  <a href="https://github.com/akashpallam13" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">
                    View Profile
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/akash-pallam-739a37207/" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">
                    View Profile
                  </a>
                </div>
                <div className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Resume</p>
                  <a href="/PallamAkashResume.pdf" download className="mt-2 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-100">
                    Download my resume (PDF) <Download size={16} />
                  </a>
                </div>
              </div>
            </div>
            <form className="space-y-4 rounded-[1.75rem] border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-xl">
              <label className="block text-sm text-slate-300">
                Full Name
                <input type="text" placeholder="Akash" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
              </label>
              <label className="block text-sm text-slate-300">
                Email
                <input type="email" placeholder="akashpallam13@gmail.com" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
              </label>
              <label className="block text-sm text-slate-300">
                Message
                <textarea rows={4} placeholder="Describe your project or opportunity" className="mt-2 w-full rounded-2xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-300" />
              </label>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
                Send Message <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
        </section>

        <footer className="mt-24 border-t border-slate-800/80 pt-8 text-sm text-slate-500">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Akash Pallam Designed .</p>
            <div className="flex items-center gap-4 text-cyan-300">
              <a href="https://github.com/akashpallam13" target="_blank" rel="noreferrer" className="transition hover:text-cyan-100">
                <Github size={16} />
              </a>
              <a href="https://www.linkedin.com/in/akash-pallam-739a37207/" target="_blank" rel="noreferrer" className="transition hover:text-cyan-100">
                <Linkedin size={16} />
              </a>
              <a href="mailto:akashpallam13@gmail.com" className="transition hover:text-cyan-100">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
