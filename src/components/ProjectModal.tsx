import { AnimatePresence, motion } from 'framer-motion'
import { useEffect } from 'react'
import type { Project } from '../data/projects'
import { Mockup } from './Mockup'

export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center overflow-y-auto bg-ink/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-3xl overflow-hidden rounded-t-3xl bg-cream shadow-2xl sm:rounded-3xl dark:bg-[#161226]"
            initial={{ y: 60, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 260 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative overflow-hidden px-6 pb-6 pt-8 sm:px-10" style={{ background: `linear-gradient(135deg, ${project.accent}22, ${project.accent2}18)` }}>
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/10 text-lg font-bold transition-colors hover:bg-black/20 dark:bg-white/10"
              >
                ✕
              </button>
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                <div className="w-32 shrink-0">
                  <Mockup kind={project.mockup} accent={project.accent} />
                </div>
                <div>
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full px-3 py-1 text-xs font-bold text-white" style={{ background: project.accent }}>
                      {project.category}
                    </span>
                    <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold dark:bg-white/10">{project.year}</span>
                    <span className="rounded-full bg-black/10 px-3 py-1 text-xs font-semibold dark:bg-white/10">{project.status}</span>
                  </div>
                  <h3 className="font-display text-4xl font-extrabold">
                    {project.emoji} {project.name}
                  </h3>
                  <p className="mt-2 max-w-md font-semibold text-ink/80 dark:text-white/80">{project.tagline}</p>
                </div>
              </div>
            </div>

            <div className="max-h-[55vh] space-y-8 overflow-y-auto px-6 py-8 sm:px-10">
              <p className="text-base leading-relaxed text-ink/75 dark:text-white/75">{project.blurb}</p>

              <div>
                <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                  What it does
                </h4>
                <ul className="space-y-2.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm text-ink/80 dark:text-white/80">
                      <span style={{ color: project.accent }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                  Under the hood
                </h4>
                <ul className="space-y-2.5">
                  {project.engineering.map((e) => (
                    <li key={e} className="flex gap-3 text-sm text-ink/80 dark:text-white/80">
                      <span style={{ color: project.accent2 }}>▸</span>
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-3 font-display text-sm font-bold uppercase tracking-widest" style={{ color: project.accent }}>
                  Built with
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-lg bg-black/5 px-3 py-1.5 font-mono text-xs dark:bg-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-black/10 pt-6 dark:border-white/10">
                <span className="text-sm font-semibold text-ink/60 dark:text-white/60">
                  {project.platforms.join(' · ')}
                </span>
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-2 rounded-xl px-5 py-2.5 font-bold text-white transition-transform hover:-translate-y-0.5"
                    style={{ background: project.accent }}
                  >
                    ▶ Get it on {project.link.label}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
