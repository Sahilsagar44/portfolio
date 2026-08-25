import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Mockup } from './Mockup'

export function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: () => void }) {
  const featured = index === 0
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onClick={onOpen}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-6 backdrop-blur transition-all hover:-translate-y-1.5 hover:shadow-2xl dark:border-white/10 dark:bg-white/[0.04] ${
        featured ? 'sm:col-span-2 sm:flex-row sm:items-center sm:gap-8' : ''
      }`}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60"
        style={{ background: `radial-gradient(circle, ${project.accent}, transparent 70%)` }}
      />

      <div className={`relative ${featured ? 'sm:order-2 sm:w-2/5 sm:shrink-0' : 'mb-6'}`}>
        <div className="transition-transform duration-500 group-hover:scale-[1.03]">
          <Mockup kind={project.mockup} accent={project.accent} />
        </div>
      </div>

      <div className={`relative flex flex-1 flex-col ${featured ? 'sm:order-1' : ''}`}>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span
            className="rounded-full px-3 py-1 text-xs font-bold"
            style={{ background: `${project.accent}22`, color: project.accent }}
          >
            {project.category}
          </span>
          <span className="rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-ink/60 dark:border-white/15 dark:text-white/60">
            {project.status}
          </span>
        </div>

        <h3 className="flex items-baseline gap-2 font-display text-3xl font-extrabold">
          <span className="text-2xl">{project.emoji}</span>
          {project.name}
          {project.aka && <span className="text-sm font-medium text-ink/40 dark:text-white/40">/ {project.aka}</span>}
        </h3>

        <p className="mt-3 text-base font-semibold text-ink/80 dark:text-white/80">{project.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink/60 dark:text-white/60">{project.blurb}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, featured ? 8 : 5).map((t) => (
            <span key={t} className="rounded-lg bg-black/5 px-2.5 py-1 font-mono text-xs text-ink/70 dark:bg-white/10 dark:text-white/70">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-grape dark:text-grape-soft">
            Explore
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </span>
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 rounded-lg border border-black/10 px-3 py-1.5 text-sm font-semibold transition-colors hover:border-mint hover:text-mint dark:border-white/15"
            >
              ▶ {project.link.label}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
