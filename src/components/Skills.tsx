import { motion } from 'framer-motion'
import { skills } from '../data/profile'
import { SectionHead } from './SectionHead'

const accentBar: Record<string, string> = {
  grape: 'from-grape to-grape-soft',
  sky: 'from-sky to-mint',
  coral: 'from-coral to-sun',
  mint: 'from-mint to-sky',
  sun: 'from-sun to-coral',
}
const accentText: Record<string, string> = {
  grape: 'text-grape dark:text-grape-soft',
  sky: 'text-sky',
  coral: 'text-coral',
  mint: 'text-mint',
  sun: 'text-sun',
}

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHead kicker="Toolbox" title="What I build with" accent="sky" center>
          Pulled straight from the code — the stacks behind the games and the platform.
        </SectionHead>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/60 p-6 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]"
            >
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${accentBar[group.accent]}`} />
              <h3 className={`mt-4 font-display text-xl font-extrabold ${accentText[group.accent]}`}>{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="rounded-lg bg-black/5 px-3 py-1.5 text-sm font-semibold text-ink/80 dark:bg-white/10 dark:text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
