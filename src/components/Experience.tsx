import { motion } from 'framer-motion'
import { experience } from '../data/profile'
import { SectionHead } from './SectionHead'

export function Experience() {
  return (
    <section id="experience" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHead kicker="The journey" title="Where I’ve been building" accent="mint" />

        <div className="relative mt-14 pl-8">
          <div className="absolute left-2.5 top-2 h-full w-0.5 bg-gradient-to-b from-grape via-coral to-transparent" />
          {experience.map((job, i) => (
            <motion.div
              key={job.company + i}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="relative mb-10 last:mb-0"
            >
              <div className="absolute -left-[1.65rem] top-1.5 h-4 w-4 rounded-full border-4 border-cream bg-grape dark:border-[#0c0a14]" />
              <div className="rounded-3xl border border-black/10 bg-white/60 p-6 dark:border-white/10 dark:bg-white/[0.04]">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-extrabold">{job.role}</h3>
                  <span className="font-mono text-xs font-bold text-grape dark:text-grape-soft">{job.period}</span>
                </div>
                <div className="mt-1 text-sm font-semibold text-ink/60 dark:text-white/60">
                  {job.company} · {job.location}
                </div>
                <ul className="mt-4 space-y-2.5">
                  {job.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-ink/75 dark:text-white/75">
                      <span className="text-coral">▹</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
