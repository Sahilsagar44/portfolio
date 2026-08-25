import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHead } from './SectionHead'

const facts = [
  { icon: '📍', label: 'Based in', value: 'Surat, Gujarat' },
  { icon: '🧩', label: 'I love', value: 'Game mechanics' },
  { icon: '🚀', label: 'Shipping since', value: '2024' },
  { icon: '🤖', label: 'Currently into', value: 'Real-time AI' },
]

export function About() {
  return (
    <section id="about" className="relative px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
          <SectionHead kicker="About me" title="A developer who ships" accent="coral" />
          <p className="mt-6 text-lg leading-relaxed text-ink/75 dark:text-white/75">{profile.bio}</p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {facts.map((f) => (
              <div key={f.label} className="rounded-2xl border border-black/10 bg-white/50 p-4 dark:border-white/10 dark:bg-white/5">
                <div className="text-2xl">{f.icon}</div>
                <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-ink/50 dark:text-white/50">{f.label}</div>
                <div className="font-display font-bold">{f.value}</div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-square w-full max-w-xs"
        >
          <div className="absolute inset-0 rotate-6 rounded-3xl bg-gradient-to-br from-grape to-coral opacity-20 blur-2xl" />
          <div className="relative grid h-full place-items-center overflow-hidden rounded-3xl border border-black/10 bg-gradient-to-br from-grape/10 via-transparent to-sun/10 dark:border-white/10">
            <div className="grain absolute inset-0 opacity-10" />
            <div className="text-center">
              <div className="font-display text-8xl font-extrabold text-transparent [-webkit-text-stroke:2px_var(--color-grape)] dark:[-webkit-text-stroke:2px_var(--color-grape-soft)]">
                SS
              </div>
              <div className="mt-2 font-mono text-sm font-bold tracking-widest text-grape dark:text-grape-soft">{profile.name.toUpperCase()}</div>
              <div className="mt-1 text-xs text-ink/50 dark:text-white/50">{profile.role}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
