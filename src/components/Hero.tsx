import { motion } from 'framer-motion'
import { profile } from '../data/profile'

const blobs = [
  { c: 'from-grape to-sky', s: 'h-72 w-72', pos: '-left-10 top-10', anim: 'animate-float-slow' },
  { c: 'from-coral to-sun', s: 'h-64 w-64', pos: 'right-0 top-24', anim: 'animate-float-med' },
  { c: 'from-mint to-sky', s: 'h-56 w-56', pos: 'left-1/3 bottom-0', anim: 'animate-float-slow' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } }),
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        {blobs.map((b, i) => (
          <div key={i} className={`absolute ${b.pos} ${b.s} ${b.anim} rounded-full bg-gradient-to-br ${b.c} opacity-30 blur-3xl dark:opacity-25`} />
        ))}
        <div className="grain absolute inset-0 opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="mx-auto w-full max-w-4xl text-center">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="show" className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 py-1.5 text-sm font-semibold backdrop-blur dark:border-white/15 dark:bg-white/5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-mint" />
          </span>
          Available for work · {profile.location}
        </motion.div>

        <motion.h1 variants={fadeUp} custom={1} initial="hidden" animate="show" className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-7xl">
          Hi, I’m {profile.name.split(' ')[0]}. I build{' '}
          <span className="relative whitespace-nowrap">
            <span className="bg-gradient-to-r from-grape via-coral to-sun bg-clip-text text-transparent">apps people play.</span>
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
              <path d="M2 9C60 3 240 3 298 6" stroke="url(#u)" strokeWidth="4" strokeLinecap="round" />
              <defs>
                <linearGradient id="u" x1="0" x2="300">
                  <stop stopColor="#7c3aed" />
                  <stop offset="1" stopColor="#fbbf24" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} custom={2} initial="hidden" animate="show" className="mx-auto mt-8 max-w-2xl text-lg text-ink/70 dark:text-white/70">
          {profile.role} from Surat. React Native games and full-stack AI products — shipped, tested and live on the Play Store.
        </motion.p>

        <motion.div variants={fadeUp} custom={3} initial="hidden" animate="show" className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a href="#work" className="rounded-xl bg-ink px-6 py-3.5 font-bold text-cream transition-transform hover:-translate-y-0.5 hover:shadow-xl dark:bg-cream dark:text-ink">
            See my work →
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="rounded-xl border-2 border-ink/15 px-6 py-3.5 font-bold transition-colors hover:border-grape hover:text-grape dark:border-white/20 dark:hover:border-grape-soft">
            GitHub
          </a>
        </motion.div>

        <motion.div variants={fadeUp} custom={4} initial="hidden" animate="show" className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((s) => (
            <div key={s.label} className="rounded-2xl border border-black/5 bg-white/50 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5">
              <div className="font-display text-3xl font-extrabold text-grape dark:text-grape-soft">{s.value}</div>
              <div className="mt-1 text-xs font-semibold text-ink/60 dark:text-white/60">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
